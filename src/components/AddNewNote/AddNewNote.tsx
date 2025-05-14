'use client'

import React, { useEffect, useState } from 'react'
import SaveButton from '@/components/Buttons/SaveButton'
import { useForm } from 'react-hook-form'
import {
  Typography,
  Modal,
  Paper,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material'
import { request } from '@/server/backend/types/request'
import CancelButton from '@/components/Buttons/CancelButton/CancelButton'
import AddButton from '@/components/Buttons/AddButton/AddButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, schema } from './validation'
import { Body, EmployeesProjectsResponse } from './types'
import {
  buttonsBox,
  fieldsBox,
  formBox,
  formTitle,
  noteFormPaper,
} from '@/styles/formStyles'
import { apiUrls } from '@/constants/apiUrls'
import ProjectOptions from './SelectOptions/ProjectOptions'
import EmployeeOptions from './SelectOptions/EmployeeOptions/EmployeesOptions'
import CustomerOptions from './SelectOptions/CustomerOptions/CustomerOptions'
import AnswersField from './SelectOptions/AnswersField/AnswersField'
import GradesOptions from './SelectOptions/GradeOptions'
import { Customer } from './SelectOptions/CustomerOptions/types'
import { toast } from 'react-toastify'

interface Props {
  fetchData?: () => void
}
const AddNewNote = ({ fetchData }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [employeeData, setEmployeeData] =
    useState<EmployeesProjectsResponse | null>(null)
  const [isEmployeeSelected, setIsEmployeeSelected] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })
  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)
    const body: Body = {
      gradedEmployeeEmail: data.gradedEmployeeEmail.value,
      project: data.project.label,
      client: data.client.label,
      answer: data.answer,
      grade: data.grade.value,
      noteWriter: data.noteWriter,
    }

    const { ok } = await request<{ status: number }>({
      url: apiUrls.feedbacksNotesAdd,
      method: 'POST',
      body,
    })

    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Note added successfully.')
    } else {
      toast.error('Something went wrong.')
    }
    setIsLoading(false)
  })

  const gradedEmployeeEmail = watch('gradedEmployeeEmail')

  useEffect(() => {
    const fetchEmployeeProjectsAndClients = async (email: string | number) => {
      const params = new URLSearchParams({
        employeeEmail: String(email),
      })
      const url = `${apiUrls.projectsWeJitEmployees}?${params.toString()}`

      const { ok, response } = await request<EmployeesProjectsResponse>({
        url: url,
        method: 'GET',
      })

      if (ok && response) {
        setEmployeeData(response)
        setIsEmployeeSelected(true)

        if (response.customerName) {
          setValue('client', {
            label: response.customerName,
            value: response.customerId,
          })
          setSelectedCustomer({
            name: response.customerName,
            id: response.customerId,
          })
        } else {
          setValue('client', { label: '', value: '' })
          setSelectedCustomer(null)
        }

        if (response.title) {
          setValue('project', {
            label: response.title,
            value: response.id,
          })
        } else {
          setValue('project', { label: '', value: '' })
        }
      } else {
        setEmployeeData(null)
        setIsEmployeeSelected(true)
        setValue('client', { label: '', value: '' })
        setValue('project', { label: '', value: '' })
        setSelectedCustomer(null)
      }
    }

    if (gradedEmployeeEmail?.value) {
      fetchEmployeeProjectsAndClients(gradedEmployeeEmail.value)
    } else {
      setEmployeeData(null)
      setIsEmployeeSelected(false)
      setValue('client', { label: '', value: '' })
      setValue('project', { label: '', value: '' })
    }
  }, [gradedEmployeeEmail, setValue])

  const customer = watch('client')
  useEffect(() => {
    if (customer) {
      setSelectedCustomer({
        name: customer.label,
        id: Number(customer.value),
      })
    } else {
      setSelectedCustomer(null)
    }
  }, [customer])

  useEffect(() => {
    if (!open) reset()
  }, [open, reset])

  const [noteTitle, setNoteTitle] = useState('Employee Feedback')
  useEffect(() => {
    if (watch('noteWriter') === 'teamLead') {
      setNoteTitle('Add New Note')
    } else if (watch('noteWriter') === 'client') {
      setNoteTitle('Add New Feedback')
    } else {
      setNoteTitle('Add New Employee Feedback')
    }
  }, [watch('noteWriter')])

  return (
    <>
      <AddButton handleOpen={() => setOpen(true)} label="Add Feedback" />
      <Modal
        disableScrollLock={true}
        open={open}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={noteFormPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>{noteTitle}</Typography>
          <form onSubmit={postFormData}>
            <Box sx={{ ...formBox }}>
              <Box sx={fieldsBox}>
                <FormControl fullWidth variant="standard" margin="normal">
                  <InputLabel id="note-writer-label">Type</InputLabel>
                  <Select
                    labelId="note-writer-label"
                    id="note-writer"
                    label="Note Writer"
                    {...control.register('noteWriter')}
                  >
                    <MenuItem value="teamLead">Note</MenuItem>
                    <MenuItem value="client">Client Feedback</MenuItem>
                    <MenuItem value="employee">Employee Feedback</MenuItem>
                  </Select>
                </FormControl>
                <EmployeeOptions control={control} errors={errors} />
                <CustomerOptions
                  control={control}
                  errors={errors}
                  employeeData={employeeData}
                  disabled={!isEmployeeSelected}
                  setSelectedCustomer={setSelectedCustomer}
                />
                <ProjectOptions
                  control={control}
                  errors={errors}
                  employeeData={employeeData}
                  disabled={!isEmployeeSelected}
                  selectedCustomerId={selectedCustomer?.id}
                />
                <AnswersField
                  control={control}
                  errors={errors}
                  disabled={!isEmployeeSelected}
                />
                <GradesOptions
                  control={control}
                  errors={errors}
                  disabled={!isEmployeeSelected}
                />
              </Box>
              <Box sx={{ ...buttonsBox, mt: -5 }}>
                <CancelButton handleClose={() => setOpen(false)} />
                <SaveButton disabled={isLoading} onSubmit={postFormData} />
              </Box>
            </Box>
          </form>
        </Paper>
      </Modal>
    </>
  )
}

export default AddNewNote

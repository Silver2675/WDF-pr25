import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Box, Modal, Paper, TextField, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import AddButton from '@/components/Buttons/AddButton/AddButton'
import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import {
  buttonsBox,
  fieldsBox,
  formBox,
  formInputLabel,
  formPaper,
  formTitle,
} from '@/styles/formStyles'
import { FormSchema, schema } from './validation'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'

interface Props {
  fetchData?: () => void
  feedbackId: number
}

const AddNewTeamMembers = ({ fetchData, feedbackId }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: { teamMembers: [{ name: '', surname: '', position: '' }] },
  })
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { fields, append, remove } = useFieldArray({
    name: 'teamMembers',
    control,
  })

  const teamMembers = watch('teamMembers')

  useEffect(() => {
    if (
      fields.length === 0 ||
      (fields.length > 0 && teamMembers[fields.length - 1].name.trim())
    ) {
      append({ name: '', surname: '', position: '' })
    }
  }, [teamMembers, append, fields.length])

  const handleChange = (
    index: number,
    field: keyof FormSchema['teamMembers'][0],
    value: string
  ) => {
    setValue(`teamMembers.${index}.${field}`, value)
    const updatedRow = {
      ...teamMembers[index],
      [field]: value,
    }
    if (
      index < fields.length - 1 &&
      !updatedRow.name.trim() &&
      !updatedRow.surname.trim() &&
      !updatedRow.position?.trim()
    ) {
      remove(index)
    } else if (
      index === fields.length - 1 &&
      (updatedRow.name.trim() ||
        updatedRow.surname.trim() ||
        updatedRow.position?.trim())
    ) {
      append({ name: '', surname: '', position: '' })
    }
  }

  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)
    const cleanedTeamMembers = data.teamMembers.filter(
      (i) => i.name.trim() || i.surname.trim()
    )

    if (cleanedTeamMembers.length === 0) {
      toast.error('At least one team member is required.')
      setIsLoading(false)
      return
    }

    const body = cleanedTeamMembers

    const { ok } = await request<{ status: number }>({
      url: apiUrls.feedbackTeamMembers(feedbackId),
      method: 'POST',
      body,
    })

    if (ok) {
      toast.success('New team members added successfully.')
      fetchData && fetchData()
      setOpen(false)
    } else {
      toast.error('Something went wrong')
    }
    setIsLoading(false)
  })

  useEffect(() => {
    !open && reset()
  }, [open, reset])

  return (
    <>
      <Box sx={{ '& button': { padding: '3px 10px', fontSize: '1rem' } }}>
        <AddButton handleOpen={() => setOpen(true)} label="Add Members" />
      </Box>
      <Modal
        disableScrollLock
        open={open}
        onClose={() => setOpen(false)}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={formPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>Add Members</Typography>
          <form onSubmit={postFormData}>
            <Box sx={formBox}>
              <Box sx={fieldsBox}>
                {fields.map((field, index) => (
                  <Box
                    key={field.id}
                    display="flex"
                    alignItems="center"
                    sx={{
                      paddingBottom: '25px',
                      paddingTop: '25px',
                    }}
                    gap={1}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        minWidth: 20,
                        paddingTop: '29px',
                        fontStyle: 'bold',
                        color:
                          fields.length > 1 && index === fields.length - 1
                            ? '#d5d5d5'
                            : 'font.gray',
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <TextField
                      sx={{
                        ...formInputLabel,
                        '& label': {
                          color:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottomColor:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiFormHelperText-root': {
                          position: 'absolute',
                          bottom: '-1.2rem',
                        },
                      }}
                      InputLabelProps={{ shrink: true }}
                      variant="standard"
                      label="Given Name"
                      fullWidth
                      value={teamMembers[index]?.name || ''}
                      onChange={(e) =>
                        handleChange(index, 'name', e.target.value)
                      }
                      error={!!errors.teamMembers?.[index]?.name}
                      helperText={errors.teamMembers?.[index]?.name?.message}
                    />
                    <TextField
                      sx={{
                        ...formInputLabel,
                        '& label': {
                          color:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottomColor:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiFormHelperText-root': {
                          position: 'absolute',
                          bottom: '-1.2rem',
                        },
                      }}
                      InputLabelProps={{ shrink: true }}
                      variant="standard"
                      label="Surname"
                      fullWidth
                      value={teamMembers[index]?.surname || ''}
                      onChange={(e) =>
                        handleChange(index, 'surname', e.target.value)
                      }
                      error={!!errors.teamMembers?.[index]?.surname}
                      helperText={errors.teamMembers?.[index]?.surname?.message}
                    />
                    <TextField
                      sx={{
                        ...formInputLabel,
                        '& label': {
                          color:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottomColor:
                            fields.length > 1 && index === fields.length - 1
                              ? '#d5d5d5'
                              : 'font.gray',
                        },
                        '& .MuiFormHelperText-root': {
                          position: 'absolute',
                          bottom: '-1.2rem',
                        },
                      }}
                      InputLabelProps={{ shrink: true }}
                      variant="standard"
                      label="Position"
                      fullWidth
                      value={teamMembers[index]?.position || ''}
                      onChange={(e) =>
                        handleChange(index, 'position', e.target.value)
                      }
                    />
                  </Box>
                ))}
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

export default AddNewTeamMembers

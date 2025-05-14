'use client'

import React, {
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react'
import { request } from '@/server/backend/types/request'
import {
  Customer,
  Employee,
  EmployeeFilters,
  EmployeeOverview,
  Project,
} from './types'
import { apiUrls } from '@/constants/apiUrls'
import useLocalStorageFilters from '../Hooks/UseLocalStorageFilters'
import EmployeesTable from '../EmployeesTable/EmployeesTable'

const EMPLOYEES_LOCAL_STORAGE_KEY = 'employeesFilters'

const EmployeesOverviews = () => {
  const [overviews, setOverviews] = useState<EmployeeOverview[]>([])
  const [employees, setEmployees] = useState<Employee[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const [employeesFilters, setEmployeesFilters] =
    useLocalStorageFilters<EmployeeFilters>({
      key: EMPLOYEES_LOCAL_STORAGE_KEY,
      initialValue: {},
    })

  const fetchData = async () => {
    setLoading(true)
    try {
      const { ok, response } = await request<EmployeeOverview[]>({
        url: apiUrls.employeesFeedbacksLatestOverview,
        method: 'POST',
        body: employeesFilters,
      })

      if (ok && response) {
        setOverviews(response)
      }
    } catch (error) {
      console.error('Error fetching employees:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCustomers = useCallback(async () => {
    const { ok, response } = await request<Customer[]>({
      url: apiUrls.accountsWeJit,
      method: 'GET',
      query: {
        missing: String(false),
      },
    })
    if (ok && response) {
      const filteredCustomers = response.filter(
        (customer) =>
          customer.id !== null &&
          customer.id !== undefined &&
          customer.name !== null &&
          customer.name !== undefined
      )
      setCustomers(filteredCustomers)
    }
  }, [])

  const fetchProjects = useCallback(async () => {
    const { ok, response } = await request<Project[]>({
      url: apiUrls.projectsWeJit,
      method: 'GET',
    })
    if (ok && response) {
      const filteredProjects = response.filter(
        (project) =>
          project.id !== null &&
          project.id !== undefined &&
          project.title !== null &&
          project.title !== undefined
      )
      setProjects(filteredProjects)
    }
  }, [])

  const fetchEmployees = useCallback(async () => {
    const { ok, response } = await request<Employee[]>({
      url: apiUrls.employeesName,
      method: 'GET',
    })
    if (ok && response) {
      const filteredEmployees = response.filter(
        (employee) => employee.givenName !== null || employee.surname !== null
      )
      setEmployees(filteredEmployees)
    }
  }, [])

  useEffect(() => {
    fetchCustomers()
    fetchProjects()
    fetchEmployees()
  }, [])

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(employeesFilters)])

  const handleSortChange = (orderBy: string) => {
    setEmployeesFilters((prev) => ({
      ...prev,
      orderBy,
    }))
  }

  const handleActiveFilterChange = () => {
    setEmployeesFilters({ ...employeesFilters })
  }

  return (
    <>
      <EmployeesTable
        filters={employeesFilters}
        filterChange={handleActiveFilterChange}
        fetchData={fetchData}
        overviews={overviews}
        title="Employees"
        setFilters={
          setEmployeesFilters as Dispatch<SetStateAction<EmployeeFilters>>
        }
        loading={loading}
        handleSortChange={handleSortChange}
        employees={employees}
        projects={projects}
        customers={customers}
      />
    </>
  )
}

export default EmployeesOverviews

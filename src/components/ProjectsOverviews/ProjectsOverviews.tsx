'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { request } from '@/server/backend/types/request'
import { Overview, OverviewsFilters } from './types'
import { apiUrls } from '@/constants/apiUrls'
import ProjectsTable from '../ProjectsTable/ProjectsTable'
import useLocalStorageFilters from '../Hooks/UseLocalStorageFilters'
import { Account, Employee, Project } from '../ProjectsTable/types'

const LOCAL_STORAGE_KEY = 'projectFilters'

const ProjectsOverviews = () => {
  const [overviewsFilters, setOverviewsFilters] =
    useLocalStorageFilters<OverviewsFilters>({
      key: LOCAL_STORAGE_KEY,
      initialValue: { isActive: true },
    })

  const [projects, setProjects] = useState<Project[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [employees, setEmployees] = useState<Employee[]>([])
  const [overviews, setOverviews] = useState<Overview[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const { ok, response } = await request<Overview[]>({
        url: apiUrls.projectsOverview,
        method: 'POST',
        body: overviewsFilters,
      })

      if (ok && response) {
        setOverviews(response)
      }
    } catch (error) {
      console.error('Error fetching overviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchProjects = useCallback(async () => {
    const { ok, response } = await request<Project[]>({
      url: apiUrls.projectsOverview,
      method: 'POST',
      body: {},
    })
    if (ok && response) {
      setProjects(response)
    }
  }, [])

  const fetchAccounts = useCallback(async () => {
    const { ok, response } = await request<Account[]>({
      url: apiUrls.accountsNames,
      method: 'GET',
    })
    if (ok && response) {
      setAccounts(response)
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
    fetchAccounts()
    fetchEmployees()
    fetchProjects()
  }, [])

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(overviewsFilters)])

  const handleSortChange = (orderBy: string) => {
    setOverviewsFilters((prev) => ({
      ...prev,
      orderBy,
    }))
  }

  const handleActiveFilterChange = (isActive: string) => {
    setOverviewsFilters((prev) => ({
      ...prev,
      isActive: isActive === 'active',
    }))
  }

  return (
    <ProjectsTable
      filters={overviewsFilters}
      filterChange={handleActiveFilterChange}
      fetchData={fetchData}
      overviews={overviews}
      title="Projects"
      isOverviews
      setFilters={setOverviewsFilters}
      loading={loading}
      handleSortChange={handleSortChange}
      accounts={accounts}
      filterProjects={projects}
      employees={employees}
    />
  )
}

export default ProjectsOverviews

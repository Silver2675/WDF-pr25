'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { request } from '@/server/backend/types/request'
import { MyProjectsType, MyProjectsFilters, Account, Project } from './types'
import { apiUrls } from '@/constants/apiUrls'
import ProjectsTable from '../ProjectsTable/ProjectsTable'
import { tablePaper } from '@/styles/tableStyles'
import { Paper } from '@mui/material'
import useLocalStorageFilters from '../Hooks/UseLocalStorageFilters'

const LOCAL_STORAGE_KEY = 'projectFilters'

const MyProjects = () => {
  const [filterProjects, setFilterProjects] = useState<Project[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [projects, setProjects] = useState<MyProjectsType[]>([])
  const [loading, setLoading] = useState(false)

  const initialFilters = () => {
    const savedFilters = localStorage.getItem(LOCAL_STORAGE_KEY)
    return savedFilters ? JSON.parse(savedFilters) : { isActive: true }
  }

  const [projectsFilters, setProjectsFilters] =
    useLocalStorageFilters<MyProjectsFilters>({
      key: LOCAL_STORAGE_KEY,
      initialValue: initialFilters(),
    })

  const fetchData = async () => {
    setLoading(true)
    try {
      const { ok, response } = await request<MyProjectsType[]>({
        url: apiUrls.projectsOverview,
        method: 'POST',
        body: projectsFilters,
      })

      if (ok && response) {
        setProjects(response)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
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
      setFilterProjects(response)
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

  useEffect(() => {
    fetchAccounts()
    fetchProjects()
  }, [])

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(projectsFilters)])

  const handleSortChange = (orderBy: string) => {
    setProjectsFilters((prev) => ({
      ...prev,
      orderBy,
    }))
  }

  const handleActiveFilterChange = (isActive: string) => {
    setProjectsFilters((prev) => ({
      ...prev,
      isActive: isActive === 'active',
    }))
  }

  return (
    <Paper sx={tablePaper}>
      <ProjectsTable
        filters={projectsFilters}
        filterChange={handleActiveFilterChange}
        fetchData={fetchData}
        projects={projects}
        title="My Projects"
        setFilters={setProjectsFilters}
        loading={loading}
        handleSortChange={handleSortChange}
        accounts={accounts}
        filterProjects={filterProjects}
      />
    </Paper>
  )
}

export default MyProjects

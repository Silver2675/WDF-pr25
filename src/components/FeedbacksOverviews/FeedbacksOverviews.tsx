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
  FeedbackFilters,
  FeedbackOverview,
  Project,
} from './types'
import { apiUrls } from '@/constants/apiUrls'
import FeedbacksTable from '../FeedbacksTable/FeedbacksTable'
import useLocalStorageFilters from '../Hooks/UseLocalStorageFilters'

const FEEDBACKS_LOCAL_STORAGE_KEY = 'feedbacksFilters'

const FeedbacksOverviews = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [employees, setEmployees] = useState<Employee[]>([])
  const [overviews, setOverviews] = useState<FeedbackOverview[]>([])
  const [loading, setLoading] = useState(false)

  const [feedbacksFilters, setFeedbacksFilters] =
    useLocalStorageFilters<FeedbackFilters>({
      key: FEEDBACKS_LOCAL_STORAGE_KEY,
      initialValue: {},
    })

  const fetchData = async () => {
    setLoading(true)
    try {
      const { ok, response } = await request<FeedbackOverview[]>({
        url: apiUrls.feedbacks,
        method: 'POST',
        body: feedbacksFilters,
      })

      if (ok && response) {
        setOverviews(response)
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCustomers = useCallback(async () => {
    const { ok, response } = await request<Customer[]>({
      url: apiUrls.accountsWeJit,
      method: 'GET',
      query: { missing: String(false) },
    })
    if (ok && response) {
      setCustomers(
        response.filter(
          (c) => c.id !== null && c.id !== undefined && c.name !== null
        )
      )
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
      setEmployees(
        response.filter((e) => e.givenName !== null || e.surname !== null)
      )
    }
  }, [])

  useEffect(() => {
    fetchCustomers()
    fetchProjects()
    fetchEmployees()
  }, [])

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(feedbacksFilters)])

  const handleSortChange = (orderBy: string) => {
    setFeedbacksFilters((prev) => ({
      ...prev,
      orderBy,
    }))
  }

  const handleActiveFilterChange = () => {
    setFeedbacksFilters({ ...feedbacksFilters })
  }

  return (
    <FeedbacksTable
      filters={feedbacksFilters}
      filterChange={handleActiveFilterChange}
      fetchData={fetchData}
      overviews={overviews}
      title="Feedbacks"
      setFilters={
        setFeedbacksFilters as Dispatch<SetStateAction<FeedbackFilters>>
      }
      loading={loading}
      handleSortChange={handleSortChange}
      customers={customers}
      projects={projects}
      employees={employees}
    />
  )
}

export default FeedbacksOverviews

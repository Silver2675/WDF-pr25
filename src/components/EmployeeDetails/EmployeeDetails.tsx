'use client'
import React, { useCallback, useEffect, useState } from 'react'
import FeedbackList from './FeedbackList/FeedbackList'
import { EmployeeInfo } from './EmployeeInfo/EmployeeInfo'
import { EmployeeFeedbackSummary } from './EmployeeFeedbackSummary/EmployeeFeedbackSummary'
import { request } from '@/server/backend/types/request'
import { EmployeeProfile } from './types'
import { apiUrls } from '@/constants/apiUrls'

interface Params {
  employeeId: string
}

const EmployeeDetails = ({ employeeId }: Params) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<EmployeeProfile>()
  const [chosenFeedbackId, setChosenFeedbackId] = useState(-2)
  const [accordion, setAccordion] = useState<number[]>([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    loading
    const { ok, response } = await request<EmployeeProfile>({
      url: apiUrls.employeesEmployeeProfile,
      method: 'GET',
      body: {},
      query: {
        employeeEmail: employeeId,
      },
    })
    if (ok) {
      setResponse(response as EmployeeProfile)
    } else {
      setResponse({} as EmployeeProfile)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  employeeId = employeeId.replace('%40', '@')
  return (
    <>
      <EmployeeInfo
        employeeProfile={response}
        switchToChart={(id) => setChosenFeedbackId(id as number)}
        chosenFeedbackId={chosenFeedbackId}
      />
      <FeedbackList
        listOfFeedbackProcesses={response?.listOfFeedbackProcesses}
        onFeedbackChosen={(id) => setChosenFeedbackId(id as number)}
        chosenFeedbackId={chosenFeedbackId}
        accordion={accordion}
        setAccordion={(e) => setAccordion(e)}
      />
      <EmployeeFeedbackSummary
        feedbackId={chosenFeedbackId}
        feedbacks={response}
        onChartClick={(e, d) => {
          const accordionIndex =
            (response?.listOfFeedbackProcesses.length ?? 0) -
            1 -
            (d?.dataIndex ?? 0)
          accordion.includes(accordionIndex)
            ? setAccordion(accordion.filter((v) => v !== accordionIndex))
            : setAccordion(accordion.concat(accordionIndex))
        }}
      ></EmployeeFeedbackSummary>
    </>
  )
}

export default EmployeeDetails

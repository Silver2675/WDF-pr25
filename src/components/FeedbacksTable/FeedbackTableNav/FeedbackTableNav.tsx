import { tableNav, buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React from 'react'
import { FeedbackTableNavProps } from './types'
import FilterData from '@/components/FeedbacksOverviews/FilterData/FilterData'
import AddNewNote from '@/components/AddNewNote'

const FeedbackTableNav = ({
  filters,
  setFilters,
  fetchData,
  projects,
  employees,
  customers,
}: FeedbackTableNavProps) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{ ...tableNav, position: 'relative', alignItems: 'start' }}
      >
        <Card elevation={0} sx={{ minWidth: '930px' }}>
          <FilterData
            filters={filters}
            setFilters={setFilters}
            projects={projects}
            customers={customers}
            employees={employees}
          />
        </Card>
        <Card
          elevation={0}
          sx={{
            ...buttonsCard,
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 1,
            paddingRight: 1.5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 1,
            marginTop: 4.2,
            marginRight: 0,
          }}
        >
          <AddNewNote fetchData={fetchData} />
        </Card>
      </Card>
    </>
  )
}

export default FeedbackTableNav

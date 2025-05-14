import AddNew from '@/components/AddNewProject/Form'
import ProjectStatusDropdown from '@/components/Buttons/ActiveInactiveButton'
import { tableNav, buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React from 'react'
import { ProjectTableNavProps } from './types'
import FilterData from '@/components/ProjectsOverviews/FilterData/FilterData'
import DownloadMenu from '@/components/Buttons/DownloadMenu'

const ProjectTableNav = ({
  filters,
  filterChange,
  fetchData,
  isOverviews,
  setFilters,
  employees,
  projects,
  accounts,
}: ProjectTableNavProps) => {
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
            isOverviews={isOverviews}
            accounts={accounts}
            projects={projects}
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
          <DownloadMenu />
          <ProjectStatusDropdown
            value={filters.isActive ? 'active' : 'inactive'}
            onChange={(status) => {
              const isActive = status === 'active'
              setFilters((prev) => ({ ...prev, isActive }))
              filterChange(status)
            }}
          />
          {isOverviews && <AddNew fetchData={fetchData} />}
        </Card>
      </Card>
    </>
  )
}

export default ProjectTableNav

import { tableContainer } from '@/styles/tableStyles'
import {
  TableContainer,
  Paper,
  Table,
  Box,
  CircularProgress,
} from '@mui/material'
import React from 'react'
import { ProjectsTableProps } from './types'
import ProjectTableBody from './ProjectTableBody'
import ProjectTableNav from './ProjectTableNav'
import ProjectTableHead from './ProjectTableHead'
import { mainLayout } from '@/styles/styles'
import ProjectsTableDog from './ProjectsTableDog'

const ProjectsTable = ({
  filters,
  filterChange,
  fetchData,
  overviews = [],
  projects = [],
  title,
  isOverviews,
  setFilters,
  loading,
  handleSortChange,
  employees,
  accounts,
  filterProjects,
}: ProjectsTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={tableContainer}>
      <ProjectTableNav
        filterChange={filterChange}
        filters={filters}
        fetchData={fetchData}
        title={title}
        isOverviews={isOverviews}
        setFilters={setFilters}
        projects={filterProjects}
        employees={employees}
        accounts={accounts}
      />
      {loading ? (
        <Box sx={mainLayout}>
          <CircularProgress size={64} />
        </Box>
      ) : (
        <Table>
          {projects.length > 0 || overviews.length > 0 ? (
            <>
              <ProjectTableHead
                isOverviews={isOverviews}
                isActive={filters.isActive}
                orderBy={filters.orderBy || ''}
                onSort={handleSortChange}
              />
              <ProjectTableBody
                overviews={overviews}
                projects={projects}
                isOverviews={isOverviews}
                isActive={filters.isActive}
              />
            </>
          ) : (
            <ProjectsTableDog
              loading={loading}
              isActive={filters.isActive}
              isOverviews={isOverviews}
            />
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default ProjectsTable

import React from 'react'
import OverallStatus from '@/components/ProjectsOverviews/OverallStatus'
import { routes } from '@/constants/routes'
import { rowStyle, cellStyle } from '@/styles/tableStyles'
import { TableBody, TableRow, TableCell } from '@mui/material'
import { useRouter } from 'next/navigation'
import { tableDataOverviews, tableDataProjects } from '../utils'
import { projectTableColumns } from '../const'
import { tableBodyProps } from './types'
import dayjs from 'dayjs'

const ProjectTableBody = ({
  isOverviews,
  overviews,
  projects,
  isActive,
}: tableBodyProps) => {
  const router = useRouter()

  const tableData = isOverviews
    ? tableDataOverviews(overviews)
    : tableDataProjects(projects)

  const columnsConfig = projectTableColumns(isActive, isOverviews)

  const isDateBeforeOrSameAsToday = (dateString: string) => {
    const dateValue = dayjs(dateString, 'DD/MM/YYYY')
    const today = dayjs().startOf('day')
    return dateValue.isBefore(today, 'day')
  }

  return (
    <TableBody>
      {tableData?.map((project) => (
        <TableRow
          hover
          onClick={() => router.push(routes.project(project.id))}
          key={project.id}
          sx={rowStyle}
        >
          {columnsConfig.map((column, index) => {
            const isNextReportColumn = column.headerId === 'dateOfNextReport'
            const cellContent = project[column.headerId]
            const isDateString =
              typeof cellContent === 'string' &&
              /^\d{2}\/\d{2}\/\d{4}$/.test(cellContent)
            const cellStyleWithCondition =
              isNextReportColumn &&
              isDateString &&
              isDateBeforeOrSameAsToday(cellContent as string)
                ? { ...cellStyle, color: '#DD0000' }
                : cellStyle
            return (
              <TableCell
                key={`cell-${project.id}-${index}`}
                sx={{
                  ...cellStyleWithCondition,
                  paddingLeft: column.paddingLeft ? 2.5 : '',
                  width: index === 1 ? '100%' : 'auto',
                  textWrap: index === 1 ? '' : 'nowrap',
                }}
              >
                {cellContent}
              </TableCell>
            )
          })}

          <TableCell sx={{ ...cellStyle, paddingRight: 2.5 }}>
            <OverallStatus
              id={project.id}
              statuses={{
                planTimeStatus: project.planTimeStatus,
                resourcesStatus: project.resourcesStatus,
                scopeStatus: project.scopeStatus,
                costStatus: project.costStatus,
                riskStatus: project.riskStatus,
              }}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ProjectTableBody

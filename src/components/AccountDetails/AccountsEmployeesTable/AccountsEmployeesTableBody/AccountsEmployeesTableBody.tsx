import { Box, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { accountsEmployeesTableColumns } from '../const'
import { AccountsTableBodyProps } from './types'
import { tableDataOverviews } from '../utils'
import { cellStyle } from '@/styles/tableStyles'
import EditEmployee from '@/components/EditEmployee/Form/EditEmployee'
import DeleteEmployee from '@/components/DeleteEmployee/DeleteEmployee'
import { useRouter } from 'next/navigation'

const AccountsEmployeesTableBody = ({
  overviews,
  accountId,
  fetchData,
}: AccountsTableBodyProps) => {
  const tableData = tableDataOverviews(overviews)
  const columnsConfig = accountsEmployeesTableColumns()
  const router = useRouter()

  return (
    <TableBody>
      {tableData?.map((account) => {
        return (
          <React.Fragment key={account.id ?? 0}>
            <TableRow
              hover
              sx={{
                position: 'relative',
                ':hover .hover-box': {
                  display: 'block',
                },
              }}
            >
              {columnsConfig.map((column, index) => {
                if (column.headerId === 'id') return null
                const value = account[column.headerId as keyof typeof account]
                const width = column.headerId === 'name' ? '26%' : 'auto'
                return (
                  <TableCell
                    key={`cell-${account.id ?? 0}-${index}`}
                    sx={{
                      ...cellStyle,
                      lineHeight: 0,
                      paddingLeft:
                        column.headerId === 'currentProjects'
                          ? 1.5
                          : column.paddingLeft
                          ? 2.5
                          : '',
                      paddingRight:
                        columnsConfig.length - index === 1 ? 2.5 : '',
                      height: '20px',
                      fontSize: '14px',
                      paddingTop: 2.5,
                      paddingBottom: 2.5,
                      width,
                    }}
                  >
                    {column.headerId === 'projectNames'
                      ? account.projectNames && account.projectNames.length > 0
                        ? account.projectNames.map((project, idx) => (
                            <span
                              key={project.id ?? idx}
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                router.push(`/project/${project.id}`)
                              }
                            >
                              {project.name}
                              {account.projectNames?.length &&
                                idx < account.projectNames?.length - 1 &&
                                ', '}
                            </span>
                          ))
                        : '-'
                      : typeof value === 'string' ||
                        typeof value === 'number' ||
                        React.isValidElement(value)
                      ? value
                      : null}
                  </TableCell>
                )
              })}
              <TableCell
                sx={{ ...cellStyle, width: '25%', position: 'relative' }}
              >
                <Box
                  sx={{
                    display: 'none',
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                  }}
                  className="hover-box"
                >
                  <EditEmployee
                    employeeData={{
                      accountId: accountId,
                      id: account.id,
                      givenName: account.givenName,
                      surname: account.surname,
                      mail: account.mail,
                      jobTitle: account.jobTitle,
                    }}
                    fetchData={fetchData}
                  />
                  <DeleteEmployee
                    employeeData={{
                      accountId: accountId,
                      id: account.id as number,
                      givenName: account.givenName as string,
                      surname: account.surname as string,
                    }}
                    fetchData={fetchData}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </React.Fragment>
        )
      })}
    </TableBody>
  )
}

export default AccountsEmployeesTableBody

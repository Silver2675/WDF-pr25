import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { accountsProjectsTableColumns } from '../const'
import { AccountsProjectsTableBodyProps } from './types'
import { tableDataOverviews } from '../utils'
import { cellStyle } from '@/styles/tableStyles'
import { routes } from '@/constants/routes'
import { useRouter } from 'next/navigation'

const AccountsProjectsTableBody = ({
  overviews,
}: AccountsProjectsTableBodyProps) => {
  const tableData = tableDataOverviews(overviews)
  const columnsConfig = accountsProjectsTableColumns()
  const router = useRouter()

  return (
    <TableBody>
      {tableData?.map((account) => {
        return (
          <React.Fragment key={account.id ?? 0}>
            <TableRow
              onClick={() =>
                account.id ? router.push(routes.project(account.id)) : ''
              }
              hover
              sx={{
                position: 'relative',
                cursor: 'pointer',
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
                      paddingLeft: column.paddingLeft ? 2.5 : '',
                      paddingRight:
                        columnsConfig.length - index === 1 ? 2.5 : '',
                      height: '20px',
                      fontSize: '14px',
                      paddingTop: 2.5,
                      paddingBottom: 2.5,
                      width,
                    }}
                  >
                    {typeof value === 'string' ||
                    typeof value === 'number' ||
                    React.isValidElement(value)
                      ? value
                      : null}
                  </TableCell>
                )
              })}
            </TableRow>
          </React.Fragment>
        )
      })}
    </TableBody>
  )
}

export default AccountsProjectsTableBody

import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { accountsTableColumns } from '../const'
import { AccountsTableBodyProps } from './types'
import { tableDataOverviews } from '../utils'
import { cellStyle } from '@/styles/tableStyles'
import { routes } from '@/constants/routes'
import { useRouter } from 'next/navigation'

const AccountsTableBody = ({ overviews }: AccountsTableBodyProps) => {
  const tableData = tableDataOverviews(overviews)
  const columnsConfig = accountsTableColumns()
  const router = useRouter()

  return (
    <TableBody>
      {tableData?.map((account) => {
        return (
          <React.Fragment key={account.id ?? 0}>
            <TableRow
              hover
              onClick={() => router.push(routes.account(account.id))}
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
                const width = column.headerId === 'name' ? '31%' : 'auto'

                return (
                  <TableCell
                    key={`cell-${account.id ?? 0}-${index}`}
                    sx={{
                      ...cellStyle,
                      width,
                      fontSize: '0.875rem',
                      paddingLeft: column.paddingLeft ? 2.5 : '',
                      paddingRight:
                        columnsConfig.length - index === 1 ? 2.5 : '',
                      height: '20px',
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

export default AccountsTableBody

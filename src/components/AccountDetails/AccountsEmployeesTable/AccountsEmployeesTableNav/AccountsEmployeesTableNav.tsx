import { buttonsCard, tableNav } from '@/styles/tableStyles'
import { Card, Typography } from '@mui/material'
import React from 'react'
import { AccountsEmployeesTableNavProps } from './types'
import AddNewEmployee from '@/components/AddNewEmployee/Form/AddNewEmployee'

const AccountsEmployeesTableNav = ({
  fetchData,
  accountId,
}: AccountsEmployeesTableNavProps) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{ ...tableNav, position: 'relative', alignItems: 'start' }}
      >
        <Card elevation={0} sx={{ minWidth: '200px' }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 1000,
              paddingLeft: 1,
              paddingTop: 0.6,
              paddingBottom: 0.2,
            }}
          >
            Points of Contact
          </Typography>
        </Card>
        <Card
          elevation={0}
          sx={{
            ...buttonsCard,
            top: 0,
            right: 0,
            paddingRight: 1.5,
            flexDirection: 'row',
            alignItems: 'left',
            marginRight: 0,
          }}
        >
          <AddNewEmployee fetchData={fetchData} accountId={accountId} />
        </Card>
      </Card>
    </>
  )
}

export default AccountsEmployeesTableNav

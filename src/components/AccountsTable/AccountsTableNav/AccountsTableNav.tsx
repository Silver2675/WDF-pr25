import { buttonsCard, tableNav } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React from 'react'
import { AccountTableNavProps } from './types'
import AddNewAccount from '@/components/AddNewAccount/Form/AddNewAccount'
import AccountOverviewsFilterData from '@/components/AccountsOverviews/AccountOverviewsFilterData/AccountOverviewsFilterData'
import ProjectStatusDropdown from '@/components/Buttons/ActiveInactiveButton'

const AccountsTableNav = ({
  filters,
  setFilters,
  fetchData,
  filterChange,
  accounts,
}: AccountTableNavProps) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{ ...tableNav, position: 'relative', alignItems: 'start' }}
      >
        <Card elevation={0} sx={{ minWidth: '930px' }}>
          <AccountOverviewsFilterData
            filters={filters}
            setFilters={setFilters}
            accounts={accounts}
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
          <ProjectStatusDropdown
            value={filters.isActive ? 'active' : 'inactive'}
            onChange={(status) => {
              const isActive = status === 'active'
              setFilters((prev) => ({ ...prev, isActive }))
              if (filterChange) filterChange(status)
            }}
          />
          <AddNewAccount fetchData={fetchData} />
        </Card>
      </Card>
    </>
  )
}

export default AccountsTableNav

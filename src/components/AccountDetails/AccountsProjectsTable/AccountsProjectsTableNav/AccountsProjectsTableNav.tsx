import { buttonsCard, tableNav } from '@/styles/tableStyles'
import { Card, Typography } from '@mui/material'
import React from 'react'
import { AccountsProjectsTableNavProps } from './types'
import ProjectStatusDropdown from '@/components/Buttons/ActiveInactiveButton'

const AccountsProjectsTableNav = ({
  filters,
  setFilters,
  filterChange,
}: AccountsProjectsTableNavProps) => {
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
            Account Projects
          </Typography>
        </Card>
        <Card
          elevation={0}
          sx={{
            ...buttonsCard,
            top: 0,
            right: 0,
            paddingTop: 0.01,
            paddingRight: 1.5,
            flexDirection: 'row',
            alignItems: 'left',
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
        </Card>
      </Card>
    </>
  )
}

export default AccountsProjectsTableNav

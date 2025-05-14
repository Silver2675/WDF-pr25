'use client'
import React from 'react'
import AccountsBasicInformation from './AccountsBasicInformation'
import AccountsEmployeesTable from './AccountsEmployeesTable/AccountsEmployeesTable'
import AccountsProjectsTable from './AccountsProjectsTable/AccountsProjectsTable'

interface Params {
  accountId: number
}

const AccountsDetails = ({ accountId }: Params) => {
  return (
    <>
      <AccountsBasicInformation accountId={accountId} />
      <AccountsEmployeesTable accountId={accountId} />
      <AccountsProjectsTable accountId={accountId} />
    </>
  )
}

export default AccountsDetails

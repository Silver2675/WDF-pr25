import React from 'react'
import EditReport from '../../EditReport'
import GiveReport from '../../GiveReport'
import { CancelSaveProps } from './types'

const CancelSaveChanges = ({
  readOnlyElement,
  reportId,
  projectReport,
  projectId,
  changeReadOnlyElement,
  fetchReport,
  handleSubmit,
  fetchNewestReport,
  fetchInformation,
}: CancelSaveProps) => {
  return (
    <>
      {readOnlyElement === 'EDITING_REPORT' && (
        <EditReport
          reportId={reportId}
          projectReport={projectReport}
          projectId={projectId}
          changeReadOnlyElement={changeReadOnlyElement}
          fetchReport={fetchReport as () => void}
          handleSubmit={handleSubmit}
          fetchInformation={fetchInformation}
        />
      )}
      {readOnlyElement === 'ADD_REPORT' && (
        <GiveReport
          changeReadOnlyElement={changeReadOnlyElement}
          fetchNewestReport={fetchNewestReport}
          projectId={projectId}
          handleSubmit={handleSubmit}
          fetchInformation={fetchInformation}
        />
      )}
    </>
  )
}

export default CancelSaveChanges

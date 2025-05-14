import React from 'react'
import { GrDocumentWord } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

const DownloadAllReportsDocxButton: React.FC = () => (
  <DownloadButton<null>
    apiUrl={() => apiUrls.reportsLatestDocx}
    defaultFilename="all_Reports.docx"
    tooltipTitle="Download All Reports DOCX"
    Icon={GrDocumentWord}
    identifier={null}
    buttonStyles={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0.72,
      minHeight: 0,
      minWidth: 0,
    }}
  />
)

export default DownloadAllReportsDocxButton

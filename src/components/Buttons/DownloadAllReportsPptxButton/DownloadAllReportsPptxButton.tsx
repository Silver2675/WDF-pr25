import React from 'react'
import { GrDocumentPpt } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

const DownloadAllReportsPptxButton: React.FC = () => (
  <DownloadButton<null>
    apiUrl={() => apiUrls.reportsLatestPptx}
    defaultFilename="all_Reports.pptx"
    tooltipTitle="Download All Reports PPTX"
    Icon={GrDocumentPpt}
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

export default DownloadAllReportsPptxButton

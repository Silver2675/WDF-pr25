import React from 'react'
import { GrDocumentPpt } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

const DownloadMyReportsPptxButton: React.FC = () => (
  <DownloadButton<null>
    apiUrl={() => apiUrls.reportsLatestPptx}
    defaultFilename="my_Reports.pptx"
    tooltipTitle="Download My Reports PPTX"
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

export default DownloadMyReportsPptxButton

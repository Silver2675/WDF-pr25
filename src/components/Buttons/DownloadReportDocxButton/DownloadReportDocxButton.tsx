import React from 'react'
import { GrDocumentWord } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

interface DownloadReportDocxButtonProps {
  reportId: number
}

const DownloadReportDocxButton: React.FC<DownloadReportDocxButtonProps> = ({
  reportId,
}) => (
  <DownloadButton<number>
    apiUrl={(id) => apiUrls.reportDocx(id)}
    defaultFilename={`report_${reportId}.docx`}
    tooltipTitle="Download Report DOCX"
    Icon={GrDocumentWord}
    identifier={reportId}
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

export default DownloadReportDocxButton

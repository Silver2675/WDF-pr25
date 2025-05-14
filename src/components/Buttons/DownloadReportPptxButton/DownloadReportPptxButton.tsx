import React from 'react'
import { GrDocumentPpt } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

interface DownloadReportPptxButtonProps {
  reportId: number
}

const DownloadReportPptxButton: React.FC<DownloadReportPptxButtonProps> = ({
  reportId,
}) => (
  <DownloadButton<number>
    apiUrl={(id) => apiUrls.reportPptx(id)}
    defaultFilename={`report_${reportId}.pptx`}
    tooltipTitle="Download Report PPTX"
    Icon={GrDocumentPpt}
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

export default DownloadReportPptxButton

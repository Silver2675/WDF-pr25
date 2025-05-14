import React from 'react'
import { GrDocumentWord } from 'react-icons/gr'
import DownloadButton from '../DownloadButton'
import { apiUrls } from '@/constants/apiUrls'

interface DownloadFeedbackDocxButtonProps {
  feedbackId: number | null | undefined
}

const DownloadFeedbackDocxButton: React.FC<DownloadFeedbackDocxButtonProps> = ({
  feedbackId,
}) => {
  return (
    <DownloadButton<number>
      apiUrl={(id) => apiUrls.feedbackDocx(id)}
      defaultFilename={`feedback_${feedbackId}.docx`}
      tooltipTitle="Download Feedback DOCX"
      Icon={GrDocumentWord}
      identifier={feedbackId}
      buttonStyles={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  )
}

export default DownloadFeedbackDocxButton

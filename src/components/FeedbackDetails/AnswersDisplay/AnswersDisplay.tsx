import React, { useRef } from 'react'
import {
  Box,
  CircularProgress,
  Typography,
  TableContainer,
  Paper,
} from '@mui/material'
import { AnswersDisplayProps } from './types'
import {
  displayedAnswers,
  AnswersDisplayLoadingAnimationBox,
  AnswersDisplayGrid,
  AnswersDisplayContent,
} from '@/styles/tableStyles'
import DownloadFeedbackDocxButton from '@/components/Buttons/DownloadFeedbackDocxButton'

const AnswersDisplay = ({
  feedback,
  feedbackId,
  isLoading,
}: AnswersDisplayProps) => {
  const tableContainerRef = useRef<HTMLDivElement | null>(null)

  const getAnswersOrGrades = () => {
    if (!feedback) return []
    return feedback.questionAnswers.map((qa) => ({
      question: qa.question,
      answers: qa.answers,
      grades: qa.grades,
    }))
  }

  const questionAnswers = getAnswersOrGrades()

  const renderContent = () => (
    <Box
      sx={{ paddingLeft: 3, paddingRight: 2, paddingTop: 0, paddingBottom: 1 }}
    >
      {questionAnswers.map(({ question, answers, grades }, index) => (
        <Box key={index} mt={3}>
          <Typography sx={{ ...displayedAnswers, paddingBottom: 1 }}>
            <strong>{question}</strong>
          </Typography>

          {answers && !grades && answers.length > 0 && (
            <Box>
              {answers.map((answer, idx) => (
                <Typography sx={{ ...displayedAnswers }} key={idx}>
                  {`Answer ${idx + 1}: `}
                  {answer.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              ))}
            </Box>
          )}

          {grades && !answers && grades.length > 0 && (
            <Box>
              {grades.map((grade, idx) => (
                <Typography sx={{ ...displayedAnswers }} key={idx}>
                  {`Grade: ${grade}`}
                </Typography>
              ))}
            </Box>
          )}

          {grades && answers && grades.length > 0 && answers.length > 0 && (
            <>
              <Box>
                {grades.map((grade, idx) => (
                  <Typography sx={{ ...displayedAnswers }} key={idx}>
                    {`Grade: ${grade}`}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ paddingTop: 1.4 }}>
                {answers.map((answer, idx) => (
                  <Typography sx={{ ...displayedAnswers }} key={idx}>
                    {`Content: `}
                    {answer.split('\n').map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                ))}
              </Box>
            </>
          )}
        </Box>
      ))}
    </Box>
  )

  return isLoading ? (
    <Box sx={AnswersDisplayLoadingAnimationBox}>
      <CircularProgress size={64} />
    </Box>
  ) : (
    <Box sx={AnswersDisplayGrid}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: 26,
          top: 18,
        }}
      >
        <DownloadFeedbackDocxButton feedbackId={feedbackId} />
      </Box>
      <TableContainer
        component={Paper}
        sx={AnswersDisplayContent}
        ref={tableContainerRef}
      >
        {renderContent()}
      </TableContainer>
    </Box>
  )
}

export default AnswersDisplay

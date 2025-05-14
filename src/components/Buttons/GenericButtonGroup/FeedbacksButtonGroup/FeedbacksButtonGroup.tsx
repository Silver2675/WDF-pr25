import React from 'react'
import { buttonGroupStyle } from '@/styles/buttonsStyles'
import { Button } from '@mui/material'
import { activeButton as defaultActiveButton } from '@/styles/buttonsStyles'

type FeedbacksButtonProps = {
  currentTable: 'feedbacks' | 'summary'
  onTableSwitch: (table: 'feedbacks' | 'summary') => void
}

const FeedbacksButtonGroup: React.FC<FeedbacksButtonProps> = ({
  currentTable,
  onTableSwitch,
}) => {
  return (
    <Button
      onClick={() => {
        onTableSwitch(currentTable === 'feedbacks' ? 'summary' : 'feedbacks')
      }}
      sx={{
        ...defaultActiveButton,
        zIndex: 1,
        ...buttonGroupStyle,
        backgroundColor: 'rgb(244, 244, 244)',
        '&:hover': {
          backgroundColor: 'rgb(219, 219, 223)',
        },
      }}
      variant="contained"
    >
      {'Go to '}
      {currentTable === 'feedbacks' ? 'Summary' : 'Feedback'}
    </Button>
  )
}

export default FeedbacksButtonGroup

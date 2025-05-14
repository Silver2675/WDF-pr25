import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { IconButton, Tooltip } from '@mui/material'

interface Props {
  handleClick: () => void
  nextId?: number
  tooltipTitle: string
}

const NextProjectButton = ({ handleClick, nextId, tooltipTitle }: Props) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton onClick={handleClick} disabled={!nextId}>
        <ArrowCircleRightOutlinedIcon sx={{ color: 'font.gray' }} />
      </IconButton>
    </Tooltip>
  )
}

export default NextProjectButton

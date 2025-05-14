import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import { IconButton, Tooltip } from '@mui/material'

interface Props {
  handleClick: () => void
  prevId?: number
  tooltipTitle: string
}

const PrevProjectButton = ({ handleClick, prevId, tooltipTitle }: Props) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton onClick={handleClick} disabled={!prevId}>
        <ArrowCircleLeftOutlinedIcon sx={{ color: 'font.gray' }} />
      </IconButton>
    </Tooltip>
  )
}

export default PrevProjectButton

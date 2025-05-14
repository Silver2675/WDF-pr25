import React, { useContext } from 'react'
import { Tooltip, Menu, MenuItem, IconButton } from '@mui/material'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import DownloadAllReportsDocxButton from '@/components/Buttons/DownloadAllReportsDocxButton/DownloadAllReportsDocxButton'
import DownloadAllReportsPptxButton from '@/components/Buttons/DownloadAllReportsPptxButton/DownloadAllReportsPptxButton'
import DownloadReportPptxButton from '@/components/Buttons/DownloadReportPptxButton/DownloadReportPptxButton'
import DownloadReportDocxButton from '@/components/Buttons/DownloadReportDocxButton/DownloadReportDocxButton'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { UserContext } from '@/context/UserContext'
import DownloadMyReportsPptxButton from '../DownloadMyReportsPptxButton/DownloadMyReportsPptxButton'
import DownloadMyReportsDocxButton from '../DownloadMyReportsDocxButton/DownloadMyReportsDocxButton'

interface DownloadMenuProps {
  reportId?: number
}

const DownloadMenu: React.FC<DownloadMenuProps> = ({ reportId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const { groups } = useContext(UserContext)
  const authorization = useCheckUnauthorized()

  if (authorization.loading) {
    return null
  }

  const isManager = groups?.includes('Manager')

  const renderMenuItems = () => {
    if (reportId) {
      return (
        <>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
            }}
          >
            <DownloadReportDocxButton reportId={reportId} />
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
              marginTop: 2,
            }}
          >
            <DownloadReportPptxButton reportId={reportId} />
          </MenuItem>
        </>
      )
    } else if (!isManager) {
      return (
        <>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
            }}
          >
            <DownloadMyReportsDocxButton />
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
              marginTop: 2,
            }}
          >
            <DownloadMyReportsPptxButton />
          </MenuItem>
        </>
      )
    } else {
      return (
        <>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
            }}
          >
            <DownloadAllReportsDocxButton />
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: 'inline-block',
              padding: 0,
              minHeight: 60,
              minWidth: 39,
              marginTop: 2,
            }}
          >
            <DownloadAllReportsPptxButton />
          </MenuItem>
        </>
      )
    }
  }

  return (
    <div>
      <Tooltip title="Download Options">
        <IconButton onClick={handleClick}>
          <FaCloudDownloadAlt size={25} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ width: '600px', alignContent: 'center' }}
        disableScrollLock={true}
      >
        {renderMenuItems()}
      </Menu>
    </div>
  )
}

export default DownloadMenu

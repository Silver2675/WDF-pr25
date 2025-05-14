import React from 'react'
import { ButtonBase, Tooltip } from '@mui/material'
import { toast } from 'react-toastify'
import { handleFileDownload } from '../utils'

interface DownloadButtonProps<T> {
  apiUrl: (id: T | null | undefined) => string
  defaultFilename: string
  tooltipTitle: string
  Icon: React.ComponentType<{ size?: number; color?: string }>
  identifier: T | null | undefined
  buttonStyles?: React.CSSProperties
}

const DownloadButton = <T extends string | number | null>({
  apiUrl,
  defaultFilename,
  tooltipTitle,
  Icon,
  identifier,
  buttonStyles = {},
}: DownloadButtonProps<T>) => {
  const handleDownload = async () => {
    try {
      toast.info('Your download will begin shortly.')
      const response = await fetch(apiUrl(identifier))
      await handleFileDownload(response, defaultFilename)
    } catch (error) {
      toast.error('Failed to download file.')
    }
  }

  return (
    <Tooltip title={tooltipTitle}>
      <ButtonBase
        onClick={handleDownload}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0.72,
          minHeight: 0,
          minWidth: 0,
          ...buttonStyles,
        }}
      >
        <Icon size={25} color="#979797" />
      </ButtonBase>
    </Tooltip>
  )
}

export default DownloadButton

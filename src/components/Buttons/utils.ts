import { toast } from 'react-toastify'

export const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/

export const handleFileDownload = async (
  response: Response,
  defaultFilename: string
) => {
  if (!response.ok) {
    toast.error('Something went wrong.')
    return
  }

  const contentDisposition = response.headers.get('content-disposition')
  let filename = defaultFilename

  if (contentDisposition) {
    const matches = filenameRegex.exec(contentDisposition)
    if (matches && matches[1]) {
      filename = decodeURIComponent(matches[1].replace(/['"]/g, ''))
    }
  }

  try {
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    toast.success('Successfully downloaded the report.')
  } catch (error) {
    toast.error('Failed to process the file download.')
  }
}

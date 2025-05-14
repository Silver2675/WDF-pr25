import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import ControlledSelect from '@/components/ControlledSelect'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'
import { ProjectsOptionsProps, Project } from './types'
import { getProjectOptions } from './utils'

const ProjectOptions = ({
  control,
  errors,
  disabled,
  selectedCustomerId,
}: ProjectsOptionsProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProjects = useCallback(async () => {
    if (!selectedCustomerId) return

    setLoading(true)
    const { ok, response } = await request<Project[]>({
      url: apiUrls.projectsWeJit,
      method: 'GET',
      query: { customerId: String(selectedCustomerId) },
    })
    if (ok && response) {
      setProjects(response)
    }
    setLoading(false)
  }, [selectedCustomerId])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return (
    <ControlledSelect
      control={control}
      options={getProjectOptions(projects)}
      name={'project'}
      label={'Project'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
      disabled={disabled}
      freeSolo
    />
  )
}

export default ProjectOptions

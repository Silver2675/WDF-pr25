'use client'
import { useEffect, useState, useCallback } from 'react'
import { request } from '@/server/backend/types/request'
import { Project, ProjectsOptionsProps } from './types'
import { getOptions } from './utils'
import ControlledSelect from '@/components/ControlledSelect'
import { apiUrls } from '@/constants/apiUrls'
import { formInputLabel } from '@/styles/formStyles'

const ProjectsOptions = ({
  control,
  idValue,
  errors,
}: ProjectsOptionsProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProjectsData = useCallback(async () => {
    if (idValue) {
      setLoading(true)
      const { ok, response } = await request<Project[]>({
        url: apiUrls.projectsWeJitNames(idValue),
        method: 'GET',
      })
      if (ok && response) {
        setProjects(response)
      }
      setLoading(false)
    }
  }, [idValue])

  useEffect(() => {
    fetchProjectsData()
  }, [fetchProjectsData])

  return (
    <ControlledSelect
      control={control}
      options={getOptions(projects)}
      name={'name'}
      label={'Project'}
      errors={errors}
      loading={loading}
      detailsStyles={formInputLabel}
      required
      freeSolo
    />
  )
}
export default ProjectsOptions

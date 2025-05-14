import React from 'react'
import GenericButtonGroup from '../GenericButtonGroup'
import { buttonGroupStyle } from '@/styles/buttonsStyles'

type ProjectsButtonProps = {
  currentTable: 'projects' | 'accounts'
  onTableSwitch: (table: 'projects' | 'accounts') => void
}

const ProjectsButtonGroup: React.FC<ProjectsButtonProps> = ({
  currentTable,
  onTableSwitch,
}) => {
  const options: { label: string; value: 'projects' | 'accounts' }[] = [
    { label: 'Overview', value: 'projects' },
    { label: 'Account Review', value: 'accounts' },
  ]

  return (
    <GenericButtonGroup
      currentValue={currentTable}
      options={options}
      onValueChange={onTableSwitch}
      sx={buttonGroupStyle}
    />
  )
}

export default ProjectsButtonGroup

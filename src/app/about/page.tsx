import { Paper } from '@mui/material'
import { tablePaper } from '@/styles/tableStyles'
import AboutPage from '@/components/AboutPage'

const About = () => {
  return (
    <Paper sx={tablePaper}>
      <AboutPage />
    </Paper>
  )
}

export default About

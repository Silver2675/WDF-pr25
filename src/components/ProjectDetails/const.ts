export const initialValues = {
  id: 0,
  name: '',
  account: {
    id: 0,
    name: '',
  },
  reporter: {
    id: 0,
    givenName: '',
    surname: '',
  },
  isActive: true,
  dateOfFirstReport: '',
  reportingFrequency: 0,
  terminationDate: '',
  filesLink: '',
  businessContext: '',
  technologies: [''],
  lastFeedbackDate: '',
}

export const teamInitialValues = {
  teamLeaders: [
    {
      id: 0,
      givenName: '',
      surname: '',
    },
  ],
  teamMembers: [
    {
      id: 0,
      givenName: '',
      surname: '',
    },
  ],
}

export const statusesValues = [
  {
    id: 0,
    name: 'Green',
    description:
      'Client is satisfied in case of outsourcing. Project is on time. No significant risks in the Project',
  },
  {
    id: 1,
    name: 'Amber',
    description:
      'Client is not entirely satisfied. There are some risks in the project. People do not have tasks',
  },
  {
    id: 2,
    name: 'Red',
    description:
      'Client is not satisfied. Project is clearly behind schedule. There are significant risks and issues',
  },
]

export const projectPhasesValues = [
  {
    id: 0,
    name: 'Initiation',
  },
  {
    id: 1,
    name: 'Delivery',
  },
  {
    id: 2,
    name: 'Deployment',
  },
  {
    id: 3,
    name: 'Maintenance',
  },
  {
    id: 4,
    name: 'Finished',
  },
]

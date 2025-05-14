export const apiUrls = {
  // ------------- ACCOUNT /api/accounts -------------

  accounts: '/api/accounts',
  accountOverview: (id: number) => `/api/accounts/${id}/overview`,
  accountPoc: (id: number) => `/api/accounts/${id}/poc`,
  accountsOverview: '/api/accounts/overview',
  accountsNames: '/api/accounts/names',
  accountsPatch: (id: string | number) => `/api/accounts/${id}`,
  accountsProjects: (id: number) => `/api/accounts/${id}/projects`,

  // ------------- EMPLOYEE /api/employees -------------

  employeesSubordinates: '/api/employees/subordinates',
  employeesAreSubordinates: '/api/employees/names/are-subordinates',
  employeesFeedbacksLatestOverview: '/api/employees/feedbacks/latest-overview',
  employeesEmployeeProfile: `/api/employees/employee-profile`,
  employeesName: '/api/employees/names',
  employeesAdd: '/api/employees',
  employeesEdit: (id: number) => `/api/employees/${id}`,

  // ------------- FEEDBACKS /api/feedbacks -------------

  feedbacks: '/api/feedbacks',
  feedbacksNotesAdd: '/api/feedbacks/notes',

  feedback: (id: number) => `/api/feedbacks/${id}`,
  feedbackDocx: (feedbackId: number | null | undefined): string =>
    `/api/feedbacks/${feedbackId}/docx-feedback`,
  feedbackTeamMembers: (id: number) => `/api/feedbacks/${id}/team-members`,

  // ------------- PROJECTS /api/new-projects -------------

  projectsOverview: '/api/projects/overview',
  project: '/api/projects',
  projectOverview: (id: string | number) => `/api/projects/${id}/overview`,
  projectTeam: (id: string | number) => `/api/projects/${id}/team`,
  projectNewestReport: (id: string | number) =>
    `/api/projects/${id}/newest-report`,
  projectReportsDates: (id: string | number) =>
    `/api/projects/${id}/reports-dates`,
  patchProject: (id: string | number) => `/api/projects/${id}`,
  patchProjectTeam: (id: string | number) => `/api/projects/${id}/team`,
  patchProjectChangeStatus: (id: string | number) =>
    `/api/projects/${id}/change-status`,

  // ------------- REPORTS /api/new-reports -------------

  report: (id: number | undefined) => `/api/reports/${id}`,
  reportDocx: (reportId?: number | null | undefined): string =>
    `/api/reports/${reportId}/docx`,
  reportPptx: (reportId?: number | null | undefined): string =>
    `/api/reports/${reportId}/pptx`,
  reportsLatestDocx: '/api/reports/latest/docx',
  reportsLatestPptx: '/api/reports/latest/pptx',
  addReport: '/api/reports',

  // ------------- USER /api/user -------------

  user: '/api/user',

  // ------------- VERSION /api/about/version -------------

  appInfo: '/api/about/version',

  // ------------- WE-JIT /api/we-jit -------------

  accountsWeJit: '/api/we-jit/accounts',
  projectsWeJit: '/api/we-jit/projects',
  projectsWeJitNames: (accountName: string) =>
    `/api/we-jit/projects/are-assigned/${accountName}`,
  employeesWeJitProjects: '/api/we-jit/projects/employees',
  projectsWeJitEmployees: '/api/we-jit/employees/projects',
}

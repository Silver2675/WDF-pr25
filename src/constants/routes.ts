export const routes = {
  root: '/',
  feedbacks: '/feedbacks',
  myProjects: '/my-projects',
  projects: '/projects',
  accounts: '/accounts',
  account: (id?: number) => `/account/${id}`,
  about: '/about',
  feedbackId: (id: string) => `/feedback/${id}`,
  feedback: (id?: string) => `/feedback/${id}`,
  projectId: (id: string) => `/project/${id}`,
  project: (id?: number) => `/project/${id}`,
  employee: (mail: string) => `/employee/${mail}`,
  unauthorized: '/unauthorized',

  employees: '/employees',
}

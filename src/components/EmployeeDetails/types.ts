export interface EmployeeProfile {
  firstName: string | null
  surname: string | null
  client: string | null
  project: string | null
  latestNote: {
    id: number | null
    author: string | null
    content: string | null
    grade: number | null
    date: string | null
  }
  listOfFeedbackProcesses: [
    {
      client: string | null
      project: string | null
      reviewDate: string | null
      reviewRating: number | null
      reviewType: string | null
      reviews: [
        {
          feedbackTypeOfReviews: string | null
          rating: number | null
          id: number | null
        }
      ]
    }
  ]
}

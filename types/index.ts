export type Task = {
  id: number | string
  title: string
  created_at: string
  isDone: boolean
}

export type User = {
  id: string
  email: string
  name: string
}
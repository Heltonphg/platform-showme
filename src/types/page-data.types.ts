export interface PageData<T> {
  prev?: number | null
  next: number | null
  last?: number | null
  page?: number
  items?: number
  data: T[]
}

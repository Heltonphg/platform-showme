import { InfiniteData } from 'react-query'
import { PageData } from '@type/page-data.types'

export function serializeInfiniteData<T>(infiniteData?: InfiniteData<PageData<T>>): T[] {
  if (!infiniteData) return []

  return infiniteData.pages.map((page) => page.data).flat()
}

export const commonUtils = {
  serializeInfiniteData
}

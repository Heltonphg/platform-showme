import { InfiniteData } from 'react-query'
import { PageData } from '@type/page-data.types'

export function serializeInfiniteData<T>(infiniteData?: InfiniteData<PageData<T>>): T[] {
  if (!infiniteData) return []

  const allItems = infiniteData.pages.map((page) => page.data).flat()
  return Array.from(new Set(allItems.map((item) => JSON.stringify(item)))).map((item) =>
    JSON.parse(item)
  )
}

export const commonUtils = {
  serializeInfiniteData
}

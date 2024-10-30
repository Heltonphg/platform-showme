import { useEffect, useState } from 'react'
import { useInfiniteQuery, UseInfiniteQueryResult, useQueryClient } from 'react-query'
import { PageData } from '@type/page-data.types'
import { commonUtils } from '@utils/common-utils'

type InfiniteListProps<T> = {
  key: string | string[]
  callback: (page: number, filterParam?: string) => Promise<PageData<T>>
  filterParam?: string
}

export function useInfiniteList<T>({
  key,
  callback,
  filterParam
}: InfiniteListProps<T>): UseInfiniteQueryResult<PageData<T>> & {
  list: T[]
  resetList: () => void
} {
  const [list, setList] = useState<T[]>([])

  const queryClient = useQueryClient()
  const infiniteResult = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) => callback(pageParam, filterParam),
    {
      getNextPageParam: (lastPage) => lastPage.next
    }
  )

  useEffect(() => {
    if (infiniteResult.data) {
      const newData = commonUtils.serializeInfiniteData(infiniteResult.data)
      setList(newData)
    }
  }, [infiniteResult.data])

  async function resetList() {
    await queryClient.resetQueries(key, { exact: true })
    infiniteResult.refetch()
  }

  return {
    ...infiniteResult,
    list,
    resetList
  }
}

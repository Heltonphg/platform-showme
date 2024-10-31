import { useInfiniteList } from '@hooks/use-infinite-list.hook'
import { categoryService } from '@services/category/category.service'
import { QueryKeys } from '@type/query-keys.types'

export const useCategoryList = () => {
  const {
    hasNextPage,
    fetchNextPage,
    list: categories,
    isFetchingNextPage,
    isLoading
  } = useInfiniteList({
    key: [QueryKeys.CATEGORIES],
    callback: categoryService.list
  })

  function onEndReached() {
    if (hasNextPage) {
      fetchNextPage({ cancelRefetch: true })
    }
  }

  return {
    categories,
    onEndReached,
    isFetchingNextPage,
    isLoading
  }
}

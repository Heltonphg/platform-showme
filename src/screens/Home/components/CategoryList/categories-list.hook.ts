import { useInfiniteList } from '@hooks/use-infinite-list.hook'
import { categoryService } from '@services/category/category.service'
import { QueryKeys } from '@type/query-keys.types'

export const useCategoryList = () => {
  const categoryListQuery = useInfiniteList([QueryKeys.CATEGORIES], categoryService.list)

  function onEndReached() {
    if (categoryListQuery.hasNextPage) {
      categoryListQuery.fetchNextPage({ cancelRefetch: true })
    }
  }

  const categories = categoryListQuery.list || []
  const isFetchingNextPage = categoryListQuery.isFetchingNextPage

  return {
    categories,
    onEndReached,
    isFetchingNextPage
  }
}

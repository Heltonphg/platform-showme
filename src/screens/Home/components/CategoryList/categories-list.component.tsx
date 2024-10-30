import { Loading } from '@components/Loading/loading.component'
import { useCategoryList } from './categories-list.hook'
import { CategoryFlatList, Container } from './categories-list.styles'
import { CategoryListItem } from './CategoryListItem/catery-list-item.component'

export const CategoryList = () => {
  const { categories, isFetchingNextPage, onEndReached, isLoading } = useCategoryList()
  if (isLoading) {
    return <Loading isLoading={isLoading} />
  }

  return (
    <Container>
      <CategoryFlatList
        testID="category-list"
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading isLoading={isFetchingNextPage && !isLoading} />}
      />
    </Container>
  )
}

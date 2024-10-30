import { ListCategorieskeleton } from '@components/Skeletons/list-categories.component'
import { VideosSkeleton } from '@components/Skeletons/videos.skeleton'
import { useCategoryList } from './categories-list.hook'
import { CategoryFlatList, Container, Wrapper } from './categories-list.styles'
import { CategoryListItem } from './CategoryListItem/category-list-item.component'

export const CategoryList = () => {
  const { categories, isFetchingNextPage, onEndReached, isLoading } = useCategoryList()

  if (isLoading) {
    return (
      <Wrapper>
        <ListCategorieskeleton />
      </Wrapper>
    )
  }

  return (
    <Container>
      <CategoryFlatList
        testID="category-list"
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <VideosSkeleton /> : null}
      />
    </Container>
  )
}

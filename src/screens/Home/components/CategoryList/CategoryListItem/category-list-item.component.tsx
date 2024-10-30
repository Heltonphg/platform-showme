import { CategoryType } from '@type/category.types'
import { VideoList } from '../../VideoList/video-list.component'
import { Container, TitleCategory } from './category-list-item.styles'

type RenderCategoryProps = {
  category: CategoryType
}

export const CategoryListItem = ({ category }: RenderCategoryProps) => {
  return (
    <Container>
      <TitleCategory>{category.title}</TitleCategory>

      <VideoList categoryId={category.id} />
    </Container>
  )
}

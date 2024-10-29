import { CategoryType } from '@type/category.types'
import { Container, TitleCategory } from './catery-list-item.styles'

type RenderCategoryProps = {
  category: CategoryType
}

export const CategoryListItem = ({ category }: RenderCategoryProps) => {
  return (
    <Container>
      <TitleCategory>{category.title}</TitleCategory>
    </Container>
  )
}

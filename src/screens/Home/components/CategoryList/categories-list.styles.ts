import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import theme from '@theme/index'
import { CategoryType } from '@type/category.types'

export const Container = styled.View`
  flex: 1;
`

export const CategoryFlatList = styled(
  FlatList as new (props: FlatListProps<CategoryType>) => FlatList<CategoryType>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: theme.METRICS.BASE_PEDDING }
})``

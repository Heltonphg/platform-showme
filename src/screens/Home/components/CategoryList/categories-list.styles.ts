import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import { CategoryType } from '@type/category.types'

export const Container = styled.View`
  padding-top: ${({ theme }) => theme.METRICS.BASE_PEDDING}px;
`

export const CategoryFlatList = styled(
  FlatList as new (props: FlatListProps<CategoryType>) => FlatList<CategoryType>
).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: theme.METRICS.BASE_PEDDING,
    paddingBottom: 30
  }
}))``

export const Wrapper = styled.View`
  padding: ${({ theme }) => theme.METRICS.BASE_PEDDING}px;
`

import styled from 'styled-components/native'
import { Text } from '@components/Text/text.component'
import { TextVariant } from '@src/types/text.types'

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const TitleCategory = styled(Text).attrs({
  variant: TextVariant.EXTRA_LARGE_BOLD
})``

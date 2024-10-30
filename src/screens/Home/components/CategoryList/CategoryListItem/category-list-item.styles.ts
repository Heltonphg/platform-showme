import styled from 'styled-components/native'
import { Text } from '@components/Text/text.component'
import { TextVariant } from '@src/types/text.types'

export const Container = styled.View`
  height: ${({ theme }) => theme.METRICS.MS(215)}px;
  margin-bottom: ${({ theme }) => theme.METRICS.MS(16)}px;
`

export const TitleCategory = styled(Text).attrs({
  variant: TextVariant.LARGE_BOLD
})`
  margin-bottom: ${({ theme }) => theme.METRICS.MS(11)}px;
`

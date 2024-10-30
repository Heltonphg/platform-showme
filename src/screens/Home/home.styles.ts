import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { Text } from '@components/Text/text.component'
import { TextVariant } from '@src/types/text.types'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.DARK};
`
export const Title = styled(Text).attrs({
  variant: TextVariant.EXTRA_LARGE_BOLD
})``

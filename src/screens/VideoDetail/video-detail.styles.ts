import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.DARK};
`

export const Thumbnail = styled(Animated.Image).attrs({
  resizeMode: 'stretch'
})``

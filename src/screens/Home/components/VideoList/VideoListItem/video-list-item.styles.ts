import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)``

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: ${({ theme }) => theme.METRICS.MS(130)}px;
  height: ${({ theme }) => theme.METRICS.MS(180)}px;
  border-radius: ${({ theme }) => theme.METRICS.MS(8)}px;
  margin-right: ${({ theme }) => theme.METRICS.MS(12)}px;
  overflow: hidden;
`

export const Thumbnail = styled(Animated.Image).attrs({
  resizeMode: 'stretch'
})`
  width: 100%;
  height: 100%;
`

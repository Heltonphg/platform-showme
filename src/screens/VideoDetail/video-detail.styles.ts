import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import { PlayCircle } from 'phosphor-react-native'
import styled from 'styled-components/native'
import { AnimatedText } from '@components/Text/text.styles'
import { TextVariant } from '@src/types/text.types'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.DARK[200]};
`

export const WrapperInfo = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.METRICS.BASE_PEDDING}px;
`

export const AnimatedTitle = styled(AnimatedText).attrs({
  variant: TextVariant.LARGE_BOLD
})`
  color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  margin-top: ${({ theme }) => theme.METRICS.MS(8)}px;
`

export const AnimatedMetricsInfo = styled(AnimatedText).attrs({
  variant: TextVariant.TINY_REGULAR,
  numberOfLines: 3
})`
  margin-top: ${({ theme }) => theme.METRICS.MS(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`

export const AnimatedDescription = styled(AnimatedText).attrs({
  variant: TextVariant.SMALL_REGULAR,
  numberOfLines: 3
})`
  margin-top: ${({ theme }) => theme.METRICS.MS(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`

export const AnimatedPlayVideoButton = styled(
  Animated.createAnimatedComponent(TouchableOpacity)
).attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  height: ${({ theme }) => theme.METRICS.MS(48)}px;
  margin-top: ${({ theme }) => theme.METRICS.MS(24)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.METRICS.MS(8)}px;
  background: ${({ theme }) => theme.COLORS.LIGHT[200]};
  gap: ${({ theme }) => theme.METRICS.MS(4)}px;
`

export const PlayVideoText = styled(AnimatedText).attrs({
  variant: TextVariant.MEDIUM_BOLD
})`
  color: ${({ theme }) => theme.COLORS.DARK[200]};
`
export const PlayIcon = styled(PlayCircle).attrs(({ theme }) => ({
  size: theme.METRICS.MS(24),
  color: theme.COLORS.DARK[200]
}))``

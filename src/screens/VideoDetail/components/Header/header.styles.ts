import { Image } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
  position: absolute;
  left: 20px;
  right: 20px;
  z-index: 1;
  flex-direction: row;
  justify-content: space-between;
`

export const Chevron = styled(Image)`
  width: 44px;
  height: 44px;
`

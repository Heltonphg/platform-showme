import { Pressable } from 'react-native'
import { FadeIn } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProps } from '@routes/types/app.routes.types'
import { Chevron, Container } from './header.styles'

export const Header = () => {
  const inset = useSafeAreaInsets()
  const navigation = useNavigation<AppNavigationProps>()

  return (
    <Container style={{ top: inset.top }} entering={FadeIn.delay(400)}>
      <Pressable onPress={() => navigation.goBack()}>
        <Chevron source={require('../../../../assets/chevron.png')} />
      </Pressable>
    </Container>
  )
}

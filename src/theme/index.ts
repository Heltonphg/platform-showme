import { Dimensions } from 'react-native'
import { ms } from 'react-native-size-matters'

export default {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000'
  },
  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular',
    MEDIUM: 'Roboto_500Medium',
    BOLD: 'Roboto_700Bold'
  },

  METRICS: {
    XXS: ms(10),
    XS: ms(12),
    SM: ms(14),
    MD: ms(16),
    LG: ms(18),
    XL: ms(20),
    XXL: ms(24),
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
}

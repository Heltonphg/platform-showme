import { Dimensions } from 'react-native'
import { ms } from 'react-native-size-matters'

export default {
  COLORS: {
    LIGHT: '#F5F5F5',
    DARK: '#151318'
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
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    BASE_PEDDING: ms(16)
  }
}

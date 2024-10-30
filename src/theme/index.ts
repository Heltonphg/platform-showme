import { Dimensions } from 'react-native'
import { ms } from 'react-native-size-matters'

export default {
  COLORS: {
    PRIMARY: '#6D2DB6',
    SECONDARY: '#2A104A',
    LIGHT: {
      100: '#FFFFFF',
      200: '#F5F5F5'
    },
    DARK: {
      100: '#000000',
      200: '#151318'
    },
    GRAY: {
      100: '#E1E1E6'
    }
  },
  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular',
    MEDIUM: 'Roboto_500Medium',
    BOLD: 'Roboto_700Bold'
  } as const,

  METRICS: {
    XXS: ms(12),
    XS: ms(14),
    SM: ms(16),
    MD: ms(18),
    LG: ms(20),
    XL: ms(22),
    XXL: ms(24),
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    BASE_PEDDING: ms(16),
    MS: ms
  }
}

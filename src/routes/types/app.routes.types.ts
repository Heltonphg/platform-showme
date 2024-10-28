import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum RootAppRoutes {
  Home = 'Home'
}

export type RootAppParamList = {
  [RootAppRoutes.Home]: undefined
}

export type AppNavigationProps = NativeStackNavigationProp<RootAppParamList>

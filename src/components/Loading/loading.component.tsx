import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import theme from '@theme/index'

type LoadingIndicatorProps = {
  isLoading?: boolean
} & ActivityIndicatorProps // Extende as propriedades do ActivityIndicator

export function Loading({ isLoading = true, ...rest }: LoadingIndicatorProps) {
  if (isLoading) {
    return (
      <ActivityIndicator
        testID={'loading'}
        color={theme.COLORS.LIGHT[200]}
        size="large"
        {...rest}
      />
    )
  }

  return null
}

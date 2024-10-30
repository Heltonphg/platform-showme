import React from 'react'
import { ActivityIndicator } from 'react-native'
import theme from '@theme/index'

type LoadingIndicatorProps = {
  isLoading?: boolean
}

export function Loading({ isLoading = true }: LoadingIndicatorProps) {
  if (isLoading) {
    return <ActivityIndicator color={theme.COLORS.LIGHT[200]} size={'large'} />
  }

  return null
}

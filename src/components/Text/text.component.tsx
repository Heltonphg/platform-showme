import React from 'react'
import { TextProps } from 'react-native'
import { StyledText } from '@components/Text/text.styles'
import { TextVariant } from '@type/text.types'

interface IText extends TextProps {
  variant?: TextVariant
  children?: React.ReactNode
}

export const Text = ({ variant = TextVariant.SMALL_REGULAR, children, ...rest }: IText) => {
  return (
    <StyledText variant={variant} {...rest} testID="text-component">
      {children}
    </StyledText>
  )
}

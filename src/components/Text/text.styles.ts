import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'
import { TextVariant, TextTypes } from '@type/text.types'

export const StyledText = styled.Text<TextTypes>`
  color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  ${({ variant }) => {
    switch (variant) {
      case TextVariant.TINY_REGULAR:
        return css`
          font-size: ${({ theme }) => theme.METRICS.XS}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
      case TextVariant.SMALL_REGULAR:
        return css`
          font-size: ${({ theme }) => theme.METRICS.SM}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
      case TextVariant.MEDIUM_REGULAR:
        return css`
          font-size: ${({ theme }) => theme.METRICS.MD}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
      case TextVariant.LARGE_REGULAR:
        return css`
          font-size: ${({ theme }) => theme.METRICS.LG}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
      case TextVariant.EXTRA_LARGE_REGULAR:
        return css`
          font-size: ${({ theme }) => theme.METRICS.XL}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
      case TextVariant.TINY_BOLD:
        return css`
          font-size: ${({ theme }) => theme.METRICS.XS}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        `
      case TextVariant.SMALL_BOLD:
        return css`
          font-size: ${({ theme }) => theme.METRICS.SM}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        `
      case TextVariant.MEDIUM_BOLD:
        return css`
          font-size: ${({ theme }) => theme.METRICS.MD}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        `
      case TextVariant.LARGE_BOLD:
        return css`
          font-size: ${({ theme }) => theme.METRICS.LG}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        `
      case TextVariant.EXTRA_LARGE_BOLD:
        return css`
          font-size: ${({ theme }) => theme.METRICS.XL}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        `
      default:
        return css`
          font-size: ${({ theme }) => theme.METRICS.SM}px;
          font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        `
    }
  }};
`

export const AnimatedText = Animated.createAnimatedComponent(StyledText)

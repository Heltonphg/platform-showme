import React from 'react'
import { render } from '@__tests__/utils/customRender'
import { TextVariant } from '@src/types/text.types'
import theme from '@theme/index'
import { Text } from '../text.component'

describe('Text Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Text>Test Children</Text>)

    expect(getByText('Test Children')).toBeTruthy()
  })
  it('renders children empty', () => {
    const { getByTestId } = render(<Text />)

    const textComponent = getByTestId('text-component')
    expect(textComponent.children).toHaveLength(0)
  })

  it('applies correct style for SMALL_REGULAR variant', () => {
    const { getByTestId } = render(<Text variant={TextVariant.SMALL_REGULAR} />)
    const textComponent = getByTestId('text-component')

    expect(textComponent.props.style[0].fontSize).toBe(theme.METRICS.SM)
    expect(textComponent.props.style[0].fontFamily).toBe(theme.FONT_FAMILY.REGULAR)
  })

  it('applies correct style for MEDIUM_BOLD variant', () => {
    const { getByTestId } = render(<Text variant={TextVariant.MEDIUM_BOLD}>Test Children</Text>)
    const textComponent = getByTestId('text-component')

    expect(textComponent.props.style[0].fontSize).toBe(theme.METRICS.MD)
    expect(textComponent.props.style[0].fontFamily).toBe(theme.FONT_FAMILY.BOLD)
  })
})

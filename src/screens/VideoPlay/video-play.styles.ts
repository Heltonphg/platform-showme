import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.DARK[100]};
  align-items: center;
`
export const DotLine = styled.View`
  width: ${({ theme }) => theme.METRICS.MS(30)}px;
  height: ${({ theme }) => theme.METRICS.MS(5)}px;
  background: ${({ theme }) => theme.COLORS.LIGHT[200]};
  border-radius: 10px;
  margin-top: 10px;
`

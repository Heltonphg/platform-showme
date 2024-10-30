import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: ${({ theme }) => theme.METRICS.MS(130)}px;
  height: ${({ theme }) => theme.METRICS.MS(180)}px;
  border-radius: ${({ theme }) => theme.METRICS.MS(8)}px;
  margin-right: ${({ theme }) => theme.METRICS.MS(12)}px;
  overflow: hidden;
`

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 100%;
`

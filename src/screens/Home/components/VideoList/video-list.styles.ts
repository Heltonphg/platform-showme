import { FlatList, FlatListProps } from 'react-native'
import styled from 'styled-components/native'
import { VideoType } from '@type/video.types'

export const Container = styled.View``

export const VideoFlatList = styled(
  FlatList as new (props: FlatListProps<VideoType>) => FlatList<VideoType>
).attrs({
  showsHorizontalScrollIndicator: false
})``

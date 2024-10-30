import { Loading } from '@components/Loading/loading.component'
import { useVideoList } from './video-list.hook'
import { Container, VideoFlatList } from './video-list.styles'
import { VideoListProps } from './video-list.types'
import { VideoListItem } from './VideoListItem/video-list-item.component'

export const VideoList = ({ categoryId }: VideoListProps) => {
  const { videos, onEndReached, isFetchingNextPage, isLoading } = useVideoList({ categoryId })

  if (isLoading) {
    return <Loading isLoading />
  }

  return (
    <Container>
      <VideoFlatList
        horizontal
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoListItem video={item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Loading isLoading={isFetchingNextPage} />}
      />
    </Container>
  )
}

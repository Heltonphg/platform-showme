import { VideosSkeleton } from '@components/Skeletons/videos.skeleton'
import { useVideoList } from './video-list.hook'
import { Container, VideoFlatList } from './video-list.styles'
import { VideoListProps } from './video-list.types'
import { VideoListItem } from './VideoListItem/video-list-item.component'

export const VideoList = ({ categoryId }: VideoListProps) => {
  const { videos, onEndReached, isFetchingNextPage, isLoading } = useVideoList({ categoryId })

  if (isLoading) {
    return <VideosSkeleton />
  }

  return (
    <Container>
      <VideoFlatList
        horizontal
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <VideoListItem video={item} index={index} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isFetchingNextPage ? <VideosSkeleton /> : null}
      />
    </Container>
  )
}

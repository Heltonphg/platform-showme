import { useInfiniteList } from '@hooks/use-infinite-list.hook'
import { videoService } from '@services/video/video.service'
import { QueryKeys } from '@type/query-keys.types'
import { VideoListProps } from './video-list.types'

export const useVideoList = ({ categoryId }: VideoListProps) => {
  const {
    hasNextPage,
    fetchNextPage,
    list: videos,
    isFetchingNextPage,
    isLoading
  } = useInfiniteList({
    key: [`${QueryKeys.VIDEOS}-${categoryId}`],
    callback: videoService.list,
    filterParam: categoryId
  })

  function onEndReached() {
    if (hasNextPage) {
      fetchNextPage({ cancelRefetch: true })
    }
  }

  return {
    videos,
    onEndReached,
    isFetchingNextPage,
    isLoading
  }
}

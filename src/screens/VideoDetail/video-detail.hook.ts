import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import dayjs from 'dayjs'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import {
  AppNavigationProps,
  RootAppRoutes,
  VideoDetailRouteProps
} from '@routes/types/app.routes.types'
import { videoService } from '@services/video/video.service'
import { QueryKeys } from '@src/types/query-keys.types'

export const useVideoDetail = () => {
  const isFocused = useIsFocused()
  const { navigate } = useNavigation<AppNavigationProps>()
  const {
    params: { videoItem }
  } = useRoute<VideoDetailRouteProps>()

  const [views, setViews] = useState<number>(videoItem.views)

  const onNavigateVideoPlay = () => {
    navigate(RootAppRoutes.VIDEO_PLAY, { hlsPath: videoItem.hls_path, videoId: videoItem.id })
  }

  const { refetch, isLoading } = useQuery(
    [QueryKeys.VIDEO_VIEWS, videoItem.id],
    () => videoService.getViewsByVideoId(videoItem.id),
    {
      enabled: !!videoItem.id,
      onSuccess: (data) => {
        setViews(data)
      },
      onError: (error) => {
        console.error('Error fetching views:', error)
      }
    }
  )

  useEffect(() => {
    if (isFocused && !isLoading) {
      refetch()
    }
  }, [isFocused, isLoading])

  const viewsFormated = `${views === 1 ? '1 visualização' : `${views} visualizações`}`
  const formattedDay = dayjs(videoItem.created_at).fromNow()

  return { videoItem, formattedDay, onNavigateVideoPlay, views: viewsFormated }
}

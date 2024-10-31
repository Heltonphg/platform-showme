import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useRoute } from '@react-navigation/native'
import { VideoPlayRouteProps } from '@routes/types/app.routes.types'
import { videoService } from '@services/video/video.service'

export const useVideoPlay = () => {
  const {
    params: { hlsPath, videoId }
  } = useRoute<VideoPlayRouteProps>()

  const { mutate: incrementViews } = useMutation(() => videoService.incrementView(videoId))

  useEffect(() => {
    incrementViews()
  }, [incrementViews])

  const [loadingVideo, setLoadingVideo] = useState(true)

  return { hlsPath, loadingVideo, setLoadingVideo }
}

import { VideoType } from '@type/video.types'
import { Container, Thumbnail } from './video-list-item.styles'

type VideoListItemProps = {
  video: VideoType
}

export const VideoListItem = ({ video }: VideoListItemProps) => {
  return (
    <Container>
      <Thumbnail source={{ uri: video.thumbnail }} />
    </Container>
  )
}

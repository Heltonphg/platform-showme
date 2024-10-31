import ContentLoader, { Rect } from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

export const VideosSkeleton = () => {
  const { width } = useWindowDimensions()

  return (
    <ContentLoader
      testID="list-videos-skeleton"
      width={width}
      height={190}
      backgroundColor="#333"
      foregroundColor="#999"
      speed={2}>
      <Rect x="0" y="0" rx="4" ry="4" width="130" height="190" />
      <Rect x="140" y="0" rx="4" ry="4" width="130" height="190" />
      <Rect x="280" y="0" rx="4" ry="4" width="130" height="190" />
    </ContentLoader>
  )
}

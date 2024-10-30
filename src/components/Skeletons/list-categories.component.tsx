import ContentLoader, { Rect } from 'react-content-loader/native'
import { useWindowDimensions } from 'react-native'

export const ListCategorieskeleton = () => {
  const { width, height } = useWindowDimensions()

  return (
    <ContentLoader
      width={width}
      height={height}
      backgroundColor="#333"
      foregroundColor="#999"
      speed={2}>
      <Rect x="0" y="10" rx="4" ry="4" width="140" height="20" />
      <Rect x="0" y="40" rx="4" ry="4" width="130" height="190" />
      <Rect x="140" y="40" rx="4" ry="4" width="130" height="190" />
      <Rect x="280" y="40" rx="4" ry="4" width="130" height="190" />

      <Rect x="0" y="250" rx="4" ry="4" width="200" height="20" />
      <Rect x="0" y="280" rx="4" ry="4" width="130" height="190" />
      <Rect x="140" y="280" rx="4" ry="4" width="130" height="190" />
      <Rect x="280" y="280" rx="4" ry="4" width="130" height="190" />

      <Rect x="0" y="490" rx="4" ry="4" width="200" height="20" />
      <Rect x="0" y="520" rx="4" ry="4" width="130" height="190" />
      <Rect x="140" y="520" rx="4" ry="4" width="130" height="190" />
      <Rect x="280" y="520" rx="4" ry="4" width="130" height="190" />
    </ContentLoader>
  )
}

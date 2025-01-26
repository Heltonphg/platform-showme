import { api } from '@services/api.service'
import { VideoType } from '@src/types/video.types'
import { PageData } from '@type/page-data.types'

const LIMIT = 3

async function list(page: number, categoryId?: string): Promise<PageData<VideoType>> {
  try {
    const { data: response } = await api.get<PageData<VideoType>>('videos', {
      params: {
        _page: page,
        _per_page: LIMIT,
        category: categoryId
      }
    })
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      next: response.next,
      data: response.data
    }
  } catch (error) {
    return {
      next: null,
      data: []
    }
  }
}

async function getViewsByVideoId(videoId: string): Promise<number> {
  try {
    const video = await api.get(`videos/${videoId}`)

    return video.data.views
  } catch (error) {
    return 0
  }
}

async function incrementView(videoId: string): Promise<void> {
  try {
    const video = await api.get(`videos/${videoId}`)

    await api.patch(`videos/${videoId}`, {
      views: video.data.views + 1
    })
  } catch (error) {
    console.error(error)
  }
}

export const videoService = {
  list,
  incrementView,
  getViewsByVideoId
}

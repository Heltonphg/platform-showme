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

    await new Promise((resolve) => setTimeout(resolve, 2000))

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

export const videoService = {
  list
}

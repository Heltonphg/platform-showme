import { api } from '@services/api.service'
import { CategoryType } from '@src/types/category.types'
import { PageData } from '@type/page-data.types'

const LIMIT = 4

async function list(page: number): Promise<PageData<CategoryType>> {
  try {
    const { data: response } = await api.get<PageData<CategoryType>>('categories', {
      params: {
        _page: page,
        _per_page: LIMIT
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

export const categoryService = {
  list
}

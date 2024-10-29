import { api } from '@services/api.service'
import { CategoryType } from '@src/types/category.types'
import { PageData } from '@type/page-data.types'

const LIMIT = 10

async function list(page: number): Promise<PageData<CategoryType>> {
  try {
    const { data: response } = await api.get<PageData<CategoryType>>(
      `categories?_page=${page}&_per_page=${LIMIT}`
    )

    //TODO: Remove this line after implement the real API
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

export const categoryService = {
  list
}

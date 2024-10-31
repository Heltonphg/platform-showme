import { mockCategoryResponse } from '@__tests__/mocks/api/category-response.mock'
import { mockVideosResponse } from '@__tests__/mocks/api/videos-response.mock'
import { mockNavigate } from '@__tests__/mocks/libs/react-navigation'
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@__tests__/utils/customRender'
import { RootAppRoutes } from '@routes/types/app.routes.types'
import { api } from '@services/api.service'
import { Home } from '../home.screen'

describe('Screen: Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('should display loading indicators while fetching data', () => {
    jest.spyOn(api, 'get').mockReturnValue(new Promise(() => {}))

    const { queryByTestId } = render(<Home />)

    expect(queryByTestId('list-category-skeleton')).toBeTruthy()
  })
  it('should navigate to video details on thumbnail press', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: { data: mockCategoryResponse, next: null } })
      .mockResolvedValueOnce({ data: { data: mockVideosResponse, next: null } })

    const { queryAllByTestId, queryByTestId } = render(<Home />)

    await waitForElementToBeRemoved(() => queryByTestId('list-category-skeleton'), {
      timeout: 15000
    })
    await waitForElementToBeRemoved(() => queryAllByTestId('list-videos-skeleton'), {
      timeout: 15000
    })

    const thumbnails = queryAllByTestId('thumbnail')

    fireEvent.press(thumbnails[0])

    expect(mockNavigate).toHaveBeenCalledWith(RootAppRoutes.VIDEO_DETAIL, {
      videoItem: mockVideosResponse[0]
    })
  })
  it('should render categories and videos', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: { data: mockCategoryResponse, next: null } })
      .mockResolvedValueOnce({ data: { data: mockVideosResponse, next: null } })

    const { queryByTestId, findByText, queryAllByTestId } = render(<Home />)

    await waitForElementToBeRemoved(() => queryByTestId('list-category-skeleton'), {
      timeout: 15000
    })
    await waitForElementToBeRemoved(() => queryAllByTestId('list-videos-skeleton'), {
      timeout: 15000
    })

    const categoryName = await waitFor(() => findByText(/Over The Cast/i))
    expect(categoryName).toBeTruthy()

    const thumbnails = queryAllByTestId('thumbnail')
    expect(thumbnails.length).toBeGreaterThan(0)
  })
  it('should render all categories', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: { data: mockCategoryResponse, next: null } })
      .mockResolvedValueOnce({ data: { data: mockVideosResponse, next: null } })

    const { findAllByText, queryByTestId } = render(<Home />)

    await waitForElementToBeRemoved(() => queryByTestId('list-category-skeleton'), {
      timeout: 15000
    })

    const categoryNames = await findAllByText(
      /Over The Cast|Flow Experience 2021|Netshow.me Talks/i
    )
    expect(categoryNames.length).toBe(mockCategoryResponse.length)
  })
})

export const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate
    })
  }
})

jest.mock('react-native-size-matters', () => ({
  ms: jest.fn().mockImplementation((value) => value)
}))

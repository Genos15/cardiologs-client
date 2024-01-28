import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { DelineationView } from 'src/domains/delineation/delineation.view'
import * as delineationHooks from 'src/domains/delineation/hooks/delineation.view.hooks'

jest.mock('src/domains/delineation/hooks/delineation.view.hooks')

describe('DelineationView', () => {

  const mockedDelineationHooks = jest.mocked(delineationHooks)

  afterAll(() => {
    jest.resetAllMocks()
  })

  test('renders the correct page Title', async () => {
    mockedDelineationHooks.useAnalyzeECGFile.mockReturnValue({
      networkStatus: 'idle',
      heartRateBoundary: undefined,
      sendDelineation: jest.fn(),
    })
    render(<DelineationView />)

    expect(screen.getByText('Delineation')).toBeInTheDocument()
  })

  test('renders the Loading block based on networkStatus', async () => {
    mockedDelineationHooks.useAnalyzeECGFile.mockReturnValue({
      networkStatus: 'loading',
      heartRateBoundary: undefined,
      sendDelineation: jest.fn(),
    })

    render(<DelineationView />)

    await waitFor(() => {
      expect(screen.getByTestId('loading-block')).toBeInTheDocument()
    })
  })

  test('renders the Error block based on networkStatus', async () => {
    mockedDelineationHooks.useAnalyzeECGFile.mockReturnValue({
      networkStatus: 'error',
      heartRateBoundary: undefined,
      sendDelineation: jest.fn(),
    })
    render(<DelineationView />)

    await waitFor(() => {
      expect(screen.getByTestId('error-block')).toBeInTheDocument()
    })
  })

  test('renders the Success block based on networkStatus', async () => {
    mockedDelineationHooks.useAnalyzeECGFile.mockReturnValue({
      networkStatus: 'success',
      heartRateBoundary: {
        meanHeartRate: 1,
        maxHeartRate: null,
        minHeartRate: null,
      },
      sendDelineation: jest.fn(),
    })
    render(<DelineationView />)

    await waitFor(() => {
      expect(screen.getByTestId('success-block')).toBeInTheDocument()
    })
  })
})

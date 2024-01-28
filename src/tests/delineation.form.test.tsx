import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DelineationForm } from 'src/domains/delineation/fragments/delineation.form'

describe('DelineationForm', () => {
  test('renders the form correctly', () => {
    const onSubmitMock = jest.fn();
    render(<DelineationForm onSubmit={onSubmitMock} />)

    expect(screen.getByTestId('file-input')).toBeInTheDocument()
    expect(screen.getByTestId('date-input')).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toBeInTheDocument()
  })

  test('submits the form with correct data', async () => {
    const onSubmitMock = jest.fn();
    render(<DelineationForm onSubmit={onSubmitMock} />)

    const fileInput = screen.getByTestId('file-input') as HTMLInputElement
    const dateInput = screen.getByTestId('date-input') as HTMLInputElement

    const testFile = new File(['Test file content'], 'test.csv', { type: 'text/csv' })
    fireEvent.change(fileInput, { target: { files: [testFile] } })
    fireEvent.change(dateInput, { target: { value: '2022-01-28T12:00' } })

    fireEvent.click(screen.getByTestId('submit-button'))

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(testFile, new Date('2022-01-28T12:00').getTime())
    });
  });

  test('disables submit button when form is not validated', () => {
    const onSubmitMock = jest.fn();
    render(<DelineationForm onSubmit={onSubmitMock} />)

    expect(screen.getByTestId('submit-button')).toBeDisabled()
  })

  test('enables submit button when form is valid', () => {
    const onSubmitMock = jest.fn()
    render(<DelineationForm onSubmit={onSubmitMock} />)

    const fileInput = screen.getByTestId('file-input') as HTMLInputElement
    const dateInput = screen.getByTestId('date-input') as HTMLInputElement

    const testFile = new File(['Test file content'], 'test.csv', { type: 'text/csv' })
    fireEvent.change(fileInput, { target: { files: [testFile] } })
    fireEvent.change(dateInput, { target: { value: '2022-01-28T12:00' } })

    expect(screen.getByTestId('submit-button')).toBeEnabled()
  });
  
});

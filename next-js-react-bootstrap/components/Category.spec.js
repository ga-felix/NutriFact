import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Alimentos from '../pages/alimentos'

it('should render Header', () => {
  const { getByText } = render(<Alimentos />)
  expect(getByText('test')).toBeInTheDocument()
})

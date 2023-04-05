import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo', () => {
  const todo = {
    text: 'Wash the dishes',
    done: true,
  }

  const onClickDelete = jest.fn()
  const onClickComplete = jest.fn()

  render(
    <Todo
      todo={todo}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  )

  const element = screen.getByText('Wash the dishes')
  expect(element).toBeDefined()
})

test('renders todo status', () => {
  const todo = {
    text: 'Wash the dishes',
    done: true,
  }

  const onClickDelete = jest.fn()
  const onClickComplete = jest.fn()

  render(
    <Todo
      todo={todo}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  )

  const element = screen.getByText('This todo is done')
  expect(element).toBeDefined()
})

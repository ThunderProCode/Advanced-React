import React from 'react'
import { Category } from '../Category/Category.jsx'
import { List, Item } from './styles'
import db from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        db.categories.map(category =>
          // eslint-disable-next-line react/jsx-key
          <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )
}

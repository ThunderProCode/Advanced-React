import React, { useState, useEffect } from 'react'
import { Category } from '../Category/Category.jsx'
import { List, Item } from './styles'
import { useCategoriesData } from '../../Hooks/useCategoriesData.js'

export const ListOfCategories = () => {

  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect( () => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed != newShowFixed && setShowFixed(newShowFixed) 
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )

  if(loading){
    return 'Loading...'
  } 

  return (
    <>
      {renderList()}
      { showFixed && renderList(true)}
    </>
  )
}

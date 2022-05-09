import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.jsx'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards.jsx'

const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

export default App

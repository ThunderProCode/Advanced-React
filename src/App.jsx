import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.jsx';
import { GlobalStyles } from './GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards.jsx';
import { Logo } from './components/Logo/Logo.jsx';
 
const App = () => (
  <>
    <GlobalStyles />
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

export default App;

import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.jsx'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        // eslint-disable-next-line react/jsx-key
        [1, 2, 3].map(id => <PhotoCard />)
      }
    </ul>
  )
}

import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.jsx'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        // eslint-disable-next-line react/jsx-key
        [1, 2, 3,4,5,6].map(id => <PhotoCard key={id} />)
      }
    </ul>
  )
}

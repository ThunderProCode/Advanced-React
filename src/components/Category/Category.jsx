import React from 'react'
import { Anchor, Image } from './styles'

// eslint-disable-next-line camelcase
const default_Image = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = default_Image, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

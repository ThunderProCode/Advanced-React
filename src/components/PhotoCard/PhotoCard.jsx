import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCardStyles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1531523668299-e20047c89111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect( () => {
    Promise.resolve(
      typeof window.IntersectionObserver != 'undefined' 
        ? window.IntersectionObserver : import('intersection-observer')
    ).then( () => {
      const observer = new window.IntersectionObserver( (entries) => {
        const isInsersecting  = entries[0].isIntersecting;
        if(isInsersecting){
          console.log('si');
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  },[element])

  return (

    <Article ref={element}>
      {
        show && 
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />
            {likes} likes
          </Button>
        </>
      }
    </Article>
  )
}

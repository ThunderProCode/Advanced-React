import React, { useState, useEffect } from 'react';

export const useCategoriesData  = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true)
        fetch('https://petgram-server-pi-lyart.vercel.app/categories')
          .then( res => res.json() )
          .then(response => {
            setCategories(response)
            setLoading(false)
          })
      }, [])

      return({
        categories,
        loading
      })

}
import React from 'react'
import { useParams } from 'react-router'

export const Page2 = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>user with id {params.id}</div>
  )
}


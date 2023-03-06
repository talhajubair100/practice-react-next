import React from 'react'
import { useRouter } from 'next/router'

const SingleBlog = () => {
    const router = useRouter()
    const { sno } = router.query
  return (
    <div>
        <p>{sno}</p>
        
    </div>
  )
}

export default SingleBlog
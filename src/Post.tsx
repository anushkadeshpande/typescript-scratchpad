import { useState } from 'react'

const Post = () => {

    const [ postTitle, setPostTitle ] = useState<string | null>("")

    setPostTitle(null)
  return (
    <div>Post</div>
  )
}

export default Post
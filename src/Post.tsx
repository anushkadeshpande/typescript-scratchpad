import { useState } from 'react'
import { getData } from './Data'

type PostProps = {
    id: number
    data: String
}[]

const Post = () => {
    const [ postTitle, setPostTitle ] = useState<string | null>("")
    const data: PostProps = getData()
  return (
    <div>{
        data.map(({id, data}) => <p key={id}>{id} : {data}</p>)
        }</div>
  )
}

export default Post
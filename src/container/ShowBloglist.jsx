import React from 'react'
import { useDispatch } from 'react-redux' 
import { like } from '../Redux/Action' 
const ShowBloglist = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
     const dispatch=useDispatch();
    const likedperson={
        name: "user1"

    }
  return (
    <div>
        <button onClick={()=>dispatch(like(likedperson))} >Likes</button>
    </div>

  )
}

export default ShowBloglist
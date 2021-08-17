import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:4000/posts', {
        title
      })
    } catch (error) {
      console.log(error)
    }

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group my-3'>
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default PostCreate

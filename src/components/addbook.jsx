import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function addbook() {


        const [book, setBook] = useState({})
          
        const handleChange = (e) => {
            setBook({ ...book, [e.target.name]: e.target.value })
       }
 const handleSubmit =(e)=>{
       
      console.log(book)
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='id'type="text" onChange={handleChange}/>
        <label>id</label>

        <input name='title' type="text" onChange={handleChange} />
        <label>Title</label>
        <input name='author' type="text"  onChange={handleChange} />
        <label>Author</label>
        <input name=' description' type="text"  onChange={handleChange}/>
        <label> description </label>
        <input  name='coverImage'type="text" onChange={handleChange} />
        <label>coverImage</label>
        <input type="submit" />

      </form>
    </div>
  )
}

export default addbook

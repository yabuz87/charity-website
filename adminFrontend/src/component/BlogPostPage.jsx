import React from 'react'

const BlogPostPage = () => {
  return (
   <>
     <h3 className="text-center">Blog post</h3>
    <form action="" className="text-center">
  
   <p><input type="text" placeholder="blog title" sytle={{width:"50%"}}/> </p>
   <textarea rows="23" cols="100"></textarea>
  <p> <input type="file" placeholder="photo"></input></p>
<button className="btn btn-success px-3">Submit</button>
    
    </form>
   </>
  )
}

export default BlogPostPage

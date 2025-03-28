import React from 'react'
import useGetStore from '../store/useGetStore';
const Home = () => {
  const {galleryData,blogData}=useGetStore();
  return (
    <div>
      <h2 className="text-center">Activity in Frame</h2>
<p className="text-center">this is a few image from the project and impact</p>
   <div className="container-fluid  image-divs">
  {
    blogData.map((item, index) => {
      return (
        <div key={index} className="">
        con
          <img src={item} alt={`Image ${index + 1}`} className="img-fluid container-fluid"/>
        </div>
      );
    })
  }
</div>

    </div>
  )
}

export default Home

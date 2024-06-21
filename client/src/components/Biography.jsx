import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>
          Biography
        </p>
        <h3>
          Who are we?
        </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ab consectetur fugiat, cum eaque officiis rem delectus accusantium illum veniam sint architecto quos, impedit nesciunt ipsam ducimus et ipsa mollitia amet soluta. Magni delectus quos eius similique! Itaque necessitatibus cum nam! Ratione in inventore quos explicabo expedita nihil, error dolorem.
        </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores similique, exercitationem nobis sapiente eos explicabo aperiam sequi voluptatem dolor doloribus? Itaque adipisci illo soluta iste? Eum modi libero expedita, eaque corrupti blanditiis enim eligendi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eius?</p>
        <p>Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default Biography
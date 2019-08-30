import React from 'react';

const Card = () => {
  return (
    <div className='bg-light-green bib br2 pa3 ma2 grow'>
      <img src='https://robohash.org/testing?250x250' alt='profile of a robot'/>
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
    );
}

export default Card;

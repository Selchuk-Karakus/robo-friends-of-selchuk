import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br2 pa3 ma2 grow'>
      <img alt='profile of a robot' src={`https://robohash.org/${id}?250x250`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
    );
}

export default Card;

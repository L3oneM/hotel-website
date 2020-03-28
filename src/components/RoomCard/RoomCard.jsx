import React from 'react';
import { withRouter } from 'react-router-dom';

import './RoomCard.css';

const RoomCard = ({ history, room }) => {
  const { name, price, capacity, pets, images } = room.fields;

  return (
    <div className='col mb-4'>
      <div
        className='card text-center roomCard'
        onClick={() => history.push(`/rooms/${room.id}`)}
      >
        <img
          src={images[0].fields.file.url}
          className='card-img-top'
          alt='title'
        />
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>
            {capacity}
            {capacity > 1 ? ' people' : ' person'} / pet {pets ? '' : 'un'}
            friendly
          </p>
          <p className='h5 text-warning'>{`$${price} / per night`}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RoomCard);

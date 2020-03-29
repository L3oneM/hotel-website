import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';

import './RoomPage.css';

import rooms from '../RoomsPage/roomsData';

const RoomPage = ({ match }) => {
  const [room, setRoom] = useState(null);
  useEffect(() => {
    const id = match.params.id;

    const findRoom = id => {
      return rooms.filter(room => room.id === id);
    };

    const upDatedRoom = findRoom(id);
    console.log('I runn');
    setRoom(upDatedRoom[0]);
  }, [match.params.id]);

  return (
    <main className='mx-2 mx-sm-4'>
      {room === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className='text-center py-4'>{room.fields.name}</h1>
          <Link
            to='/rooms'
            className='text-center d-block pb-3 text-danger mx-auto backLink'
          >
            Back to Rooms Search
          </Link>
          <Carousel images={room.fields.images} name={room.fields.name} />
          <section className='details-and-info row p-3 m-auto'>
            <article className='col-md-6 '>
              <h5 className='h1'>Details</h5>
              <p>{room.fields.description}</p>
            </article>
            <article className='col-md-6'>
              <div>
                <h5 className='h1'>Info</h5>
                <p>Price: ${room.fields.price}</p>
                <p>
                  Max Capacity: {room.fields.capacity}
                  {room.fields.capacity > 1 ? ' people' : ' person'}
                </p>
                <p>{room.fields.pets ? 'No' : ''} Pets Allowed</p>
                <p>{room.fields.breakfast ? 'Free Breakfast Included' : ''}</p>
              </div>
            </article>
          </section>
          <section className='room-extras p-4 m-auto'>
            <h6 className='h1'>Extras</h6>
            <ul className='extras row pl-0 mt1'>
              {room.fields.extras.map((item, index) => (
                <li key={index} className='col-md-4 col-sm-6 col-xs-12'>
                  - {item}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};

export default RoomPage;

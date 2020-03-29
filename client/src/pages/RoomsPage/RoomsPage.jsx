import React, { useState, useEffect } from 'react';

import SearchForm from '../../components/SearchForm/SearchForm';
import RoomCard from '../../components/RoomCard/RoomCard';

import rooms from './roomsData';
import { filteredRooms } from '../../services/filterServices';

import './RoomsPage.css';

const RoomsPage = () => {
  const [filters, setFilters] = useState({
    roomSize: 'all',
    roomPrice: 0,
    pets: false
  });

  useEffect(() => {
    let max = Math.max(...rooms.map(room => room.fields.price));

    console.log('object');

    setFilters(filters => ({
      ...filters,
      roomPrice: max
    }));
  }, []);

  const roomsToShow = filteredRooms(rooms, filters);

  return (
    <main className='roomsPageContainer text-center mx-3 mx-sm-5'>
      <section className='pages-filters pt-4 w-75 mx-auto pages-form'>
        <h1>Search Rooms</h1>
        <SearchForm filters={filters} setFilters={setFilters} rooms={rooms} />
      </section>
      {!roomsToShow ? (
        <h1> Loading...... </h1>
      ) : (
        <section className='rooms-showcase row row-cols-1 row-cols-sm-2 row-cols-md-3 m-auto card-deck'>
          {roomsToShow.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </section>
      )}
    </main>
  );
};

export default RoomsPage;

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchForm = ({ filters, setFilters, rooms }) => {
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    let max = Math.max(...rooms.map(room => room.fields.price));

    setMaxPrice(max);
  }, [rooms]);

  const { roomSize, roomPrice, pets } = filters;
  console.log(roomSize, roomPrice, pets);

  const handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.name === 'pets' ? target.checked : target.value;

    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <form className=' jumbotron pages-form mt-4'>
      <div className='row mb-3'>
        <div className='form-group col-12 col-md'>
          <label htmlFor='fromDate' className='mr-2'>
            From Date:
          </label>
          <DatePicker
            selected={new Date()}
            className='form-control col'
            id='fromDate'
          />
        </div>
        <div className='form-group col-12 col-md'>
          <label htmlFor='untilDate' className='mr-1'>
            Until Date:
          </label>
          <DatePicker
            selected={new Date()}
            className='form-control col'
            id='untilDate'
          />
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-12 col-md'>
          <label htmlFor='roomSize'>Room Size</label>
          <select
            className='form-control'
            id='roomSize'
            name='roomSize'
            aria-label='Select filter for room size'
            value={roomSize}
            onChange={handleChange}
          >
            <option>all</option>
            <option>single</option>
            <option>double</option>
            <option>family</option>
          </select>
        </div>
        <div className='form-group col-12 col-md'>
          <label htmlFor='formControlRange'>Room Price: ${roomPrice}</label>
          <input
            name='roomPrice'
            type='range'
            min='0'
            max={maxPrice}
            className='custom-range'
            aria-label='Range filter for room price'
            id='formControlRange'
            value={roomPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='custom-control custom-switch d-flex mt-2'>
        <input
          name='pets'
          type='checkbox'
          className='custom-control-input'
          aria-label='Checkbox for pet friendly room'
          id='customSwitch1'
          checked={pets}
          onChange={handleChange}
        />
        <label className='custom-control-label' htmlFor='customSwitch1'>
          Pets
        </label>
      </div>
    </form>
  );
};

export default SearchForm;

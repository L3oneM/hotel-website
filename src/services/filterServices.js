const filteredBySize = (rooms, size) => {
  let filteredBySizeRooms = [...rooms];

  if (size !== 'all') {
    return (filteredBySizeRooms = rooms.filter(
      room => room.fields.type === size
    ));
  }

  return filteredBySizeRooms;
};

const filteredByPrice = (rooms, price) => {
  let filteredByProceRooms = [...rooms];
  let max = Math.max(...rooms.map(room => room.fields.price));

  if (+price < max) {
    return (filteredByProceRooms = rooms.filter(
      room => room.fields.price <= +price
    ));
  }

  return filteredByProceRooms;
};

const filteredByPets = (rooms, pets) => {
  let filteredByPetRooms = [...rooms];

  if (pets) {
    return (filteredByPetRooms = rooms.filter(room => room.fields.pets));
  }

  return filteredByPetRooms;
};

export const filteredRooms = (rooms, filters) => {
  const { roomSize, roomPrice, pets } = filters;

  let filteredBySizeRooms = filteredBySize(rooms, roomSize);

  let filteredByProceRooms = filteredByPrice(filteredBySizeRooms, roomPrice);

  let filteredByPetRooms = filteredByPets(filteredByProceRooms, pets);

  return filteredByPetRooms;
};

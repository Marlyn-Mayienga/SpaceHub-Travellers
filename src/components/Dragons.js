import React from 'react';
import { useSelector } from 'react-redux';
import DragonCard from './DragonCard';

const Dragons = () => {
  const state = useSelector((state) => state.storeSlice);

  return (
    <>
      <div>
        {state.map((dragon) => (
          <DragonCard
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            src={dragon.img}
            desc={dragon.type}
            value={dragon.value}
          />
        ))}

      </div>
    </>
  );
};

export default Dragons;

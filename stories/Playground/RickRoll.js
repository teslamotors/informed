import React from 'react';

const RickRoll = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <h1>Got Ya!</h1>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

export default RickRoll;

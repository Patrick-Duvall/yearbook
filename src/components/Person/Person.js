import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

const Person = ({id, name, quote, superlative, photo}) => {
  return (
    <div className='staff-card' key={id}>
      <img src={photo} alt=''/>
      <p className='name'>{name}</p>
      <p className='quote'>"{quote}"</p>
      <p className='superlative'>{superlative}</p>
    </div>
  )
}

export default Person;

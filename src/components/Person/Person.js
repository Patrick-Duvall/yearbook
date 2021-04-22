import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

const Person = ({id, name, quote, superlative, photo, label}) => {
  return (
    <div className={`${label} grid-card`} key={id}>
      <img src={photo} alt=''/>
      <p className='name'>{name}</p>
      <p className='quote'>{quote ? `"${quote}"` : `"Meow"`}</p>
      <p className='superlative'>{superlative || 'A scared Kitten'}</p>
    </div>
  )
}

export default Person;

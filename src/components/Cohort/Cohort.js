import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE


const Cohort = ({people, label}) => {
  const renderedPeople = people.map( member => {
    return <Person
      id={member.id}
      name={member.name}
      quote={member.quote}
      superlative={member.superlative}
      photo={member.photo}
      label={label}
    />
  })

  return (
    <div className={`${label} grid-container`}>
      {renderedPeople}
    </div>
  )
}

export default Cohort;


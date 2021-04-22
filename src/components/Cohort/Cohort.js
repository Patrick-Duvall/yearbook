import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE


const Cohort = ({staff}) => {
  const renderedStaff = staff.map( member => {
    return <Person
      id={member.id}
      name={member.name}
      quote={member.quote}
      superlative={member.superlative}
      photo={member.photo}
    />
  })

  console.log(renderedStaff);

  return (
    <div className='staff-container'>
      {renderedStaff}
    </div>
  )
}

export default Cohort;


import React from 'react'

const Section = ({ title, children }) => {
  return (
    <section id={title} className='data'>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section
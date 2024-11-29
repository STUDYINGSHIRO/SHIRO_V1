import React from 'react'

export const Header = ({ name, job }) => {
  return (
    <header id="header">
        <h1>{name}</h1>
        <h2>{job}</h2>
    </header>
  )
}

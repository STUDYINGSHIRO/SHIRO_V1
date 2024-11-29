import React from 'react'

export const Technologies = ({ techname, techdesc }) => {
  return (
    <>
        <li>
            <span className='highlight'>
                {techname}
            </span>
            <span>
                {techdesc}
            </span>
        </li>
    </>
  )
}

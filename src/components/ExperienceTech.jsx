import React from 'react'
import { Technologies } from './Technologies'

export const ExperienceTech = ({ experience }) => {
  return (
    <li>
        <strong>Technologies:</strong>
        <ul>
        {
          experience.map((tech, index) => (
            <Technologies
              key={index}
              techname={tech.techname}
              techdesc={tech.techdesc}
            />
          ))
        }
      </ul>
    </li>
  )
}

import React from 'react'

export const Socials = ({ social, link }) => {
    return (
        <a
            href={link}
            target='__blank'
            className='social'
        >
            {social}
        </a>
    )
}

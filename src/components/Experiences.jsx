import React from 'react'

export const Experiences = ({ expyear, work, company, jobtitle, description, children }) => {
    return (
        <div className='experience'>
            <span className='year'><p>{expyear}</p></span>
            <span className='exp-description'>
                <h3>
                    <span className="highlight-light">{work}</span> {company}
                </h3>
                <p>
                    <h3><strong>{jobtitle}</strong></h3>
                    <ul>
                        <li dangerouslySetInnerHTML={{ __html: description }} />
                        {children}
                    </ul>
                </p>
            </span>
        </div>
    )
}

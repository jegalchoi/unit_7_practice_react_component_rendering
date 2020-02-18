import React from 'react'
import Planet from './Planet'

export default function Container({ planets }) {
  return (
    <div className='container'>
      <ul>
        {planets.map(planet =>
          <li>
            <Planet planet={planet} />
          </li>
        )}
      </ul>
    </div>
  )
}

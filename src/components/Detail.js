import React from 'react'
import {v4 as uuidV4} from 'uuid'

const Detail = ({ingredients}) => {
  return ingredients.map(ingredients => {
    return (
      <ul
        className="card p-2 border-secondary m-1 bg-light shadow-lg list-unstyled"
        key={uuidV4()}
      >
        <li className="fs-6 fw-light">{ingredients.text}</li>
      </ul>
    )
  })
}

export default Detail

import React, {useState} from 'react'
import Detail from './Detail'

const Card = ({recipe}) => {
  const {label, image, ingredients} = recipe.recipe
  const [show, setShow] = useState(false)

  return (
    <div className="col-sm-5 m-2 rounded">
      <div className="card p-2 border-secondary m-2 bg-light shadow-lg ">
        <img
          src={image}
          className="card-img-top border-dark shadow-lg"
          alt="..."
        />
        <div className="card-header">
          <h5>{label}</h5>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="btn shadow border-dark btn-primary "
          >
            Ingredients
          </button>
          {show && <Detail ingredients={ingredients} />}
        </div>
      </div>
    </div>
  )
}

export default Card

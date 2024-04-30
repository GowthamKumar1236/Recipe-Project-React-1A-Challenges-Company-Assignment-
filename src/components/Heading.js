import React from 'react'

const Heading = ({propsSearch, propsFunctionSearch, propsSubmit}) => {
  return (
    <div className="text-center mt-3">
      <h1>MANGANSE</h1>
      <h5>Search Your Food</h5>
      <form onSubmit={propsSubmit}>
        <input
          onChange={propsFunctionSearch}
          type="search"
          placeholder="Input Food Name"
          className="p-1"
          value={propsSearch}
        />
        <button
          type="submit"
          className="btn btn-secondary p-1 mx-2 rounded shadow-lg border-dark"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Heading

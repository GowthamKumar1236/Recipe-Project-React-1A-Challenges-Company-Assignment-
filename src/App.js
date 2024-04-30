import {useEffect, useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

import Card from './components/Card'
import Heading from './components/Heading'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('popular')

  const getData = () => {
    const APP_ID = '813155a8'
    const APP_KEY = 'e9bfaeedb96e0e53aa7d5050eb0952c4'

    axios({
      method: 'get',
      url: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&imageSize=THUMBNAIL&random=false`,
    })
      .then(({data}) => {
        setRecipes(data.hits)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addSearch = e => {
    setSearch(e.target.value)
  }

  const submitSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  useEffect(() => {
    getData()
  }, [query])

  return (
    <>
      <Heading
        propsSearch={search}
        propsFunctionSearch={addSearch}
        propsSubmit={submitSearch}
      />
      <div className="row justify-content-center my-4">
        {recipes.map(recipe => (
          <Card key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </>
  )
}

export default App

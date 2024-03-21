import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/style.css'
import Header from './component/header/header'

import Catalog from './page/catalog/catalog'
import Item from './page/item/item'
import Index from './page/index/index'
import { Routes, Route } from 'react-router-dom'
import UsersPage from './page/users/users'
import CreatePage from './page/createPage/createPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <body>

        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/users' element={<UsersPage />}></Route>
          <Route path='/catalog/:id' element={<Item />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
        </Routes>
      </body>
    </>
  )
}

export default App

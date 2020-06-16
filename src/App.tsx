import simpleRestProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, Resource } from 'react-admin'
import './App.css'
import people from './people'
import sessions from './sessions'
import { TypesList } from './types/TypesList'

const SERVER_URL = process.env.API_URL || 'http://localhost:3000'

const dataProvider = simpleRestProvider(SERVER_URL)
const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource {...sessions} />
      <Resource {...people} />
      <Resource name="types" list={TypesList} />
    </Admin>
  )
}

export default App

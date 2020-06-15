import simpleRestProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, Resource } from 'react-admin'
import './App.css'
import { SessionList } from './SessionList'
import { PersonList } from './PersonList'

const SERVER_URL = process.env.API_URL || 'http://localhost:3000'

const dataProvider = simpleRestProvider(SERVER_URL)
const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="sessions" list={SessionList} />
      <Resource name="people" list={PersonList} />
    </Admin>
  )
}

export default App

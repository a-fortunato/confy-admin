import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

interface Props {}

export const PersonList: React.FC<Props> = props => {
  return (
    <List {...props}>
    <Datagrid rowClick="edit">
    <TextField source="firstName" />
    <TextField source="lastName" />
    <TextField source="email" />
      {/*<NumberField source="__v"/>*/}
      </Datagrid>
      </List>
  )
}

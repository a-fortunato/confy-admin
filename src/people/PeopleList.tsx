import React from 'react'
import { List, Datagrid, TextField, Pagination } from 'react-admin'

interface Props {}

export const PeopleList: React.FC<Props> = props => {
  return (
    <List {...props} pagination={<Pagination />}>
      <Datagrid rowClick="edit">
        <TextField source="fullName" />
        <TextField source="email" type="email" />
      </Datagrid>
    </List>
  )
}

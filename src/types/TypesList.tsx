import React from 'react'
import {
  List,
  Datagrid,
  TextField,
} from 'react-admin'

interface Props {}

export const TypesList: React.FC<Props> = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="color" />
    </Datagrid>
  </List>
)

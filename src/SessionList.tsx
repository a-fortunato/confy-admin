import React from 'react'
import { List, ChipField, Datagrid, TextField, ReferenceArrayField, SingleFieldList } from 'react-admin'

interface Props {}

export const SessionList: React.FC<Props> = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <ReferenceArrayField source="speaker" reference="people">
        <SingleFieldList>
          <ChipField source="firstName" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField source="attendees" reference="people">
        <SingleFieldList>
          <ChipField source="firstName" />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  </List>
)

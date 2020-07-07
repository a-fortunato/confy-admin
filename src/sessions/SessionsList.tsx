import React from 'react'
import {
  List,
  ChipField,
  Datagrid,
  Pagination,
  ReferenceArrayField,
  SingleFieldList,
  DateField,
  TextField,
} from 'react-admin'
import { name as peopleName } from '../people'

interface Props {}

export const SessionsList: React.FC<Props> = props => (
  <List {...props} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <DateField source="startsAt" showTime />
      <TextField source="title" />
      <ReferenceArrayField source="speaker" reference={peopleName}>
        <SingleFieldList>
          <ChipField source="fullName" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField source="attendees" reference={peopleName}>
        <SingleFieldList>
          <ChipField source="fullName" />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField label="Type" source="type.name" />
    </Datagrid>
  </List>
)

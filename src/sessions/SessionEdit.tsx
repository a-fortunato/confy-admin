import React from 'react'
import {
  AutocompleteInput,
  Edit,
  SimpleForm,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  TextInput,
  required,
  DateTimeInput,
} from 'react-admin'
import { name as peopleName } from '../people'
import { Session } from './types'

interface Props {
  record?: Session
}

const SessionEditTitle: React.FC<Props> = ({ record }) => {
  return <span> {record ? record.title : ''}</span>
}

export const SessionEdit: React.FC<Props> = props => {
  return (
    <Edit undoable={false} title={<SessionEditTitle {...props} />} {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth validate={required()} />
        <DateTimeInput source="startsAt" validate={required()} />
        <DateTimeInput source="endsAt" validate={required()} />
        <TextInput label="Type" source="type.name" />
        <TextInput label="Type color" source="type.color" />
        <ReferenceInput label="Existing Type" source="type.name" reference="types">
          <AutocompleteInput allowEmpty optionText="name" />
        </ReferenceInput>
        <TextInput multiline fullWidth source="description" />
        <ReferenceArrayInput label="Speakers" source="speaker" reference={peopleName}>
          <SelectArrayInput optionText="fullName" />
        </ReferenceArrayInput>
        <ReferenceArrayInput label="Attendees" source="attendees" reference={peopleName}>
          <SelectArrayInput optionText="fullName" />
        </ReferenceArrayInput>
        <TextInput source="venue" />
        <TextInput source="address" />
      </SimpleForm>
    </Edit>
  )
}

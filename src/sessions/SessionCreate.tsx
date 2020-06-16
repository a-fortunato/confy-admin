import React from 'react'
import {
  Create,
  SimpleForm,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  required, ReferenceInput, AutocompleteInput,
} from 'react-admin'
import { name as peopleName } from '../people'

interface Props {}

export const SessionCreate: React.FC<Props> = props => {
  return (
    <Create {...props}>
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
        <TextInput source="venue" />
        <TextInput source="address" />
      </SimpleForm>
    </Create>
  )
}

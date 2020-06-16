import React from 'react'
import { Edit, SimpleForm, TextInput, required, ImageInput, ImageField } from 'react-admin'
import { Person } from './types'

interface Props {
  record?: Person
}

const PersonEditTitle: React.FC<Props> = ({ record }) => {
  return <span> {record ? `${record.fullName}` : ''}</span>
}

export const PersonEdit: React.FC<Props> = props => {
  return (
    <Edit undoable={false} title={<PersonEditTitle {...props} />} {...props}>
      <SimpleForm>
        <ImageInput source="avatar" label="Avatar" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="fullName" validate={required()} />
        <TextInput source="nickName" />
        <TextInput source="email" type="email" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}

import React from 'react'
import { Create, SimpleForm, ImageInput, ImageField, TextInput, required } from 'react-admin'

interface Props {}

export const PersonCreate: React.FC<Props> = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ImageInput source="avatar" label="Avatar" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="fullName" validate={required()} />
        <TextInput source="nickName" />
        <TextInput source="email" type="email" validate={required()} />
      </SimpleForm>
    </Create>
  )
}

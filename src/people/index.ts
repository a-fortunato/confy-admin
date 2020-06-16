import UserIcon from '@material-ui/icons/Group'
import { PeopleList } from './PeopleList'
import { PersonEdit } from './PersonEdit'
import { PersonCreate } from './PersonCreate'

export const name = 'people'

export default { name, icon: UserIcon, list: PeopleList, edit: PersonEdit, create: PersonCreate }

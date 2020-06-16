import EventIcon from '@material-ui/icons/Event'
import { SessionEdit } from './SessionEdit'
import { SessionsList } from './SessionsList'
import { SessionCreate } from './SessionCreate'

export const name = 'sessions'

export default {
  name,
  icon: EventIcon,
  edit: SessionEdit,
  list: SessionsList,
  create: SessionCreate,
}

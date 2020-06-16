export interface Session {
  title: string
  startsAt?: Date
  endsAt?: Date
  type: {
    name: string
    color: string
  }
  attendees: string[]
  speaker: string[]
  description?: string
  venue?: string
  address?: string
}

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { useDataProvider, Loading, Error } from 'react-admin'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
  },
})

const Dashboard: React.FunctionComponent = () => {
  const classes = useStyles()
  const dataProvider = useDataProvider()
  const [event, setEvent] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  // const [isEdition, setEdition] = useState<boolean>(false)
  useEffect(() => {
    dataProvider
      .getOne('events', { id: 1 })
      .then(({ data }: any) => {
        setEvent(data)
        setLoading(false)
      })
      .catch((error: Error) => {
        setError(error)
        setLoading(false)
      })
  }, [dataProvider])
  console.log('data', event, loading, error)
  if (loading) return <Loading />
  if (error) return <Error />
  if (!event) return null

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h2">
        {event.name}
      </Typography>
      <Typography align="center" variant="h4">
        {`Organized by ${event.organization}`}
      </Typography>
      <Typography align="center" variant="h4">
        {new Date (event.startingDate).toLocaleDateString() + ' - ' + new Date (event.endingDate).toLocaleDateString()}
      </Typography>
      <Typography align="center" variant="h4">
        {`${event.city}`}
      </Typography>
    </div>
  )
}

export default Dashboard

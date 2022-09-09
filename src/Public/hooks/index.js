import React from 'react'
import { Public } from './../index';

const use = () => {
  const [users, setUsers] = React.useState(null)

  const {
    getAllUsers,
  } = Public.API.useApi()

  React.useEffect(() => {
    const request = getAllUsers()
    request
      .then(res => setUsers(res.data))
  }, [])


  return {
    users,
  }
}

export const useUser = {
  use,
}
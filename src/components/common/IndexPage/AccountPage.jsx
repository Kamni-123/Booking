import React, { useContext } from 'react'
import { UserContext } from '../../../UserContext'

const AccountPage = () => {
    const {user} = useContext(UserContext);
  return (
    <div>AccountPage for {user.name}</div>
  )
}

export default AccountPage
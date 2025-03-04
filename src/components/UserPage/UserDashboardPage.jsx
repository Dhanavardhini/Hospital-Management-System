import React from 'react'
import UserHeader from './UserHeader'
import UserFooter from './UserFooter'
import UserMainPage from './UserMainPage'


function UserDashboardPage() {
  return (
    <div>
      <UserHeader/>
      <UserMainPage/>
      <UserFooter/>
    </div>
  )
}

export default UserDashboardPage

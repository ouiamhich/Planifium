import { saveCurrentUser } from '@/server-actions/user'
import { UserButton, UserProfile } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function Projects() {
  const currentUserData = await currentUser()
  await saveCurrentUser()
  return (
    <div>
      <h3>Projects</h3>
      <p>{currentUserData?.firstName}'s Projects</p>
      <UserButton/>
    </div>
  )
}

export default Projects
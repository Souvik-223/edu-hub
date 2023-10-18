import React from 'react'
import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

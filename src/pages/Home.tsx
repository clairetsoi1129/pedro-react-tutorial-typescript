import React from 'react'
import { useSelector } from 'react-redux';

export function Home() {
    const username = useSelector((state: any) => state.user.value.username);
    
  return (
    <div>This is the home page {username}</div>
  )
}

import React from 'react'
import LoadingIcon from '../assets/Spinner-loading.svg'

export default function Loading() {
  return (
    <main className='flex h-[100vh]'>
      <img src={LoadingIcon} width={250} height={250} className='m-auto' />
    </main>
  )
}

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            console.log("dipanggil setelah 3 detik")
            router.push('/')
        }, 3000)
    }, [])
  return (
    <div>
        <h1 className='title-notfound'>Oooppp... halaman not found</h1>
    </div>
  )
}

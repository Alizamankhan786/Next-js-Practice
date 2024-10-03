import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
    <h1 className='text-center mt-5 text-3xl'>Contact</h1>
    <div style={{
      textAlign: "center",
      marginTop: "20px"
    }}>
    <button className="btn btn-primary"><Link href={"/"}>Home</Link></button>
    </div>
    </>
  )
}

export default Contact
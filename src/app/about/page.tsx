import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='text-center font-bold text-3xl'>About</h1>
    <div style={{
      textAlign: "center",
      marginTop: "20px"
    }}>
    <button className="btn btn-primary"><Link href={"/"}>Home</Link></button>
    </div>
    </>
  )
}

export default About
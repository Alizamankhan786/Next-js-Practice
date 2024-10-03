import Link from 'next/link'
import React from 'react'
import About from './about/page'
import Button from './Components/Button'

const App = () => {
  return (
    <>
    <h1 className='text-center mt-5 text-3xl'>Hello World!</h1> <br />
    <div className='text-center'>
    <button className="btn btn-secondary"><Link className='text-center font-bold m-5' href={`/about`} ><h1 className='text-center'>About</h1></Link></button> <br /> <br />
    <button className="btn btn-secondary"><Link className='text-center font-bold m-5' href={`/contact`} ><h1 className='text-center'>Contact</h1></Link></button> <br /> <br />
    <button className="btn btn-secondary"><Link className='text-center font-bold m-5' href={`/product`} ><h1 className='text-center'>Product</h1></Link></button> <br /> <br />
    <button className="btn btn-secondary"><Link className='text-center font-bold m-5' href={`/services`} ><h1 className='text-center'>Services</h1></Link></button> <br /> <br />
    </div>
    <br />

    {/* <div className='text-center'>
      <Button/>
    </div> */}


    </>
  )
}

export default App
import React from 'react'
import Udemy from '../../../../assets/Certificate/Udemy.jpg'
import Udemy2 from '../../../../assets/Certificate/Udemy2.jpg'
import Golang from '../../../../assets/Certificate/Golang.jpg'


const Webdev = () => {
  return (
    <div className='network-cert-main'>
        <h1 className='h1-top-cert'>Web Developer certificate</h1>

        <div className='network-cert-image'>
            <img src={Udemy} className='cert-image'/>
            <img src={Udemy2} className='cert-image'/>
            <img src={Golang} className='cert-image'/>

        </div>

    </div>
  )
}

export default Webdev
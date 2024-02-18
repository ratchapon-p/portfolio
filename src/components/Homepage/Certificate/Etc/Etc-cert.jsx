import React from 'react'
import R from '../../../../assets/Certificate/R.jpg'
import CiscoOs from '../../../../assets/Certificate/CiscoOs.jpg'
import AWS from '../../../../assets/Certificate/AWS.jpg'

const Etc = () => {
  return (
    <div className='network-cert-main'>
        <h1 className='h1-top-cert'>Another certificate</h1>

        <div className='network-cert-image'>
            <img src={R} className='cert-image'/>
            <img src={CiscoOs} className='cert-image'/>
            <img src={AWS} className='cert-image'/>

        </div>

    </div>
  )
}

export default Etc
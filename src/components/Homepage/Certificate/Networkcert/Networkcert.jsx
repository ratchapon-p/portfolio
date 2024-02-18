import React from 'react'
import './Networkcert.css'
import ccnav7 from '../../../../assets/Certificate/CCNAv7.jpg'
import basicnetwork from '../../../../assets/Certificate/CiscoNetworkingBasics.jpg'
import cellular from '../../../../assets/Certificate/5g.jpg'

const Networkcert = () => {
  return (
    <div className='network-cert-main'>
        <h1 className='h1-top-cert'>Network certificate</h1>

        <div className='network-cert-image'>
            <img src={ccnav7} className='cert-image'/>
            <img src={cellular} className='cert-image'/>

            <img src={basicnetwork} className='cert-image'/>
        </div>

    </div>
  )
}

export default Networkcert
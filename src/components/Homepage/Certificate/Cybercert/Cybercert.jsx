import React from 'react'
import CiscoSecurity from '../../../../assets/Certificate/CiscoSecurity.jpg'
import cybercoding from '../../../../assets/Certificate/cybercoding.jpg'
import HuaweiCyberCoding from '../../../../assets/Certificate/HuaweiCyberCoding.jpg'
import thaitoptalent from '../../../../assets/Certificate/thaitoptalent.jpg'

const Cybercert = () => {
  return (
    <div className='network-cert-main'>
        <h1 className='h1-top-cert'>Cyber Security certificate</h1>

        <div className='network-cert-image'>
            <img src={CiscoSecurity} className='cert-image'/>
            <img src={cybercoding} className='cert-image'/>
            <img src={HuaweiCyberCoding} className='cert-image'/>
            <img src={thaitoptalent} className='cert-image'/>

        </div>

    </div>
  )
}

export default Cybercert
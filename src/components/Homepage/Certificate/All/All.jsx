import React from 'react'
import Networkcert from '../Networkcert/Networkcert'
import Webdev from '../Webdev/Webdev'
import Cybercert from '../Cybercert/Cybercert'
import Etc from "../Etc/Etc-cert";

const All = () => {
  return (
    <div>
        <Webdev />
        <Networkcert/>
        <Cybercert />
        <Etc />
    </div>
  )
}

export default All
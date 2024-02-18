import React, { useState } from "react";
import "./Certificate.css";
import Networkcert from "./Networkcert/Networkcert";
import Cybercert from "./Cybercert/Cybercert";
import All from "./All/All";
import Webdev from "./Webdev/Webdev";
import Etc from "./Etc/Etc-cert";
import { Link } from "react-router-dom";

const Certificate = () => {
  const [activeComponent, setActiveComponent] = useState('All')

  const showDetails = (component) =>{
    setActiveComponent(component)
  }

  return (
    <div className="certificate-main">
      <div className="certificate-type">
        <div className="border">
        <div className="type-list" onClick={() => showDetails('All')} >
          <div className="type-text">
          <div className="h2-cert">All</div>
          </div>
        </div>
        <div className="type-list" onClick={() => showDetails('Web')} >
          <div className="type-text">
          <div className="h2-cert">Web Developer</div>

          </div>
        </div>
        <div className="type-list" onClick={() => showDetails('Network')} >
          <div className="type-text">
            <div className="h2-cert">Network</div>
          </div>
        </div>
        <div className="type-list" onClick={() => showDetails('Cyber')} >
          <div className="type-text">
          <div className="h2-cert">Cyber Security</div>

          </div>
        </div>
        <div className="type-list" onClick={() => showDetails('Etc')} >
          <div className="type-text">
          <div className="h2-cert">Etc.</div>

          </div>
        </div>
        
        </div>
        <Link className="cert-back-button" to='/'>
          <div className="cert-back-text">Back</div>
        </Link>
      </div>



      <div className="certificate-image">
      <div className='cert-all'>
          {activeComponent === 'All' && <All />}
        </div>
      <div className='cert-webdev'>
          {activeComponent === 'Web' && <Webdev />}
        </div>
        <div className="cert-network">
          {activeComponent === "Network" && <Networkcert />}
        </div>
        <div className='cert-cysec'>
          {activeComponent === 'Cyber' && <Cybercert />}
        </div>
        <div className='cert-etc'>
          {activeComponent === 'Etc' && <Etc />}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
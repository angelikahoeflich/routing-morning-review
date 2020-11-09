import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
  <div>
    <h2>NiceToMeetMe</h2>
    <Link to='/'>{`<- Back to the conference room`}</Link>
  </div>)
}

export default Header
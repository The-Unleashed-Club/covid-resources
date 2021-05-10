import React from 'react';
import {Link} from "react-router-dom";

const rscrc= () => {
  return (
 <div>
     <h1>RESOURCES</h1>
     <ul>
    <li> <Link to="/Oxy">TO GET OXYGEN</Link></li>
    <li> <Link to="/Ambulance">Ambulance</Link></li>
    <li> <Link to="/Ngo">Ngo</Link></li>

</ul>
 </div>
  )
};


export default rscrc
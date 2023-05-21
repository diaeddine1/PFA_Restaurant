import React from "react";
import { Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import Heart from "react-animated-heart";
import { useState } from "react";
export default function Contain(props) {
  const [isclick, setClick] = useState(false);




  return (
    <div className="contain">
      <div className="heart">
       <Heart className="heart" isClick={isclick} onClick={() => setClick(!isclick)} />
       </div>
      <Link to={`/Details/${props.nom}`}>
        
      
        <li>{props.nom}</li>

        <li className="addresse" style={{ fontWeight: "normal" }}>
          <GiPositionMarker style={{ color: "crimson", fontSize: "30px" }} />
          {props.adresse}
        </li>
        <li className="description">{props.bio}</li>
        <li> {props.des}</li>
      </Link>
    </div>
  );
}

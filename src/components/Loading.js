import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Search/images/Weavent-01.png";

function Loading() {

  return (
    <div className="loading">
      <FontAwesomeIcon icon={["fal", "spinner"]} size="4x" spin />
    </div >
  )
}

export default Loading;
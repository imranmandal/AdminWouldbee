import React, { useState } from "react";
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function HideShow({ children }) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="hideShowTitle" onClick={() => setHidden((prevValue) => !prevValue)}>
        {hidden ? <ChevronRightRoundedIcon className="d-inline" /> : <ExpandMoreRoundedIcon/>} {children[0]}
        
      </div>
      <div hidden={hidden}>{children[1]}</div>
    </>
  );
}

export default HideShow;

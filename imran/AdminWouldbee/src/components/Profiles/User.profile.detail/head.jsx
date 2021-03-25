import React, { useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

function Head(props) {
  useEffect(()=>{
    console.log(props.data);
  },[]);
  const { isApproved, disabled, profileManagedBy } = props;
  return (
    <>
      <div className="d-flex flex-start px-5 py-3">
        <div >
          
          <p>
            {isApproved ? (
                <div className="mr-5 d-flex justify-content-between ">
                <p>Approved &nbsp;</p>
              <CheckCircleRoundedIcon style={{ color: "#5DADE2" }} />
              </div>
            ) : (
                <div className="mr-5 d-flex justify-content-between  ">
                <p>Not-Approved :&nbsp;</p>
              <CancelRoundedIcon style={{ color: "#EC7063" }} />
              </div>
            )}
          </p>
        </div>
        <div className="d-flex text-capitalize">
        <p>managed by :&nbsp;</p>
            <p>{profileManagedBy}</p>
        </div>
        
      </div>
    </>
  );
}

export default Head;

import React, { useState } from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function ProfilePic(props) {
  const { pic } = props;
  const [toggleDisplay, setToggleDisplay] = useState(false);

  //   const handleMouseHover = () => {
  //     setToggleDisplay((prevVal) => !prevVal);
  //   };
  return (
    <>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div
          className="position-relative profile_pic_container p-0 m-0"
          onMouseEnter={() => {
            setToggleDisplay(true);
          }}
          onMouseLeave={() => {
            setToggleDisplay(false);
          }}
        >
          <img
            className="profile_pic"
            src={pic.signedDownloadUrl}
            alt={pic.id}
          />
          {toggleDisplay ? (
            <div className="position-absolute profile_pic_approve">
              <p>Approve</p>
              <p>Dis-approve</p>
            </div>
          ) : null}
        </div>
        
      </ReactCSSTransitionGroup>
      
    </>
  );
}

export default ProfilePic;

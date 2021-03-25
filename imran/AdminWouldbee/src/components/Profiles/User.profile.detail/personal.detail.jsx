import React, { useEffect, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function PersonalDetails(props) {
  const { data, style, disabled } = props;
  const { firstName, lastName, gender, motherTongue } = data;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
       <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    
      <div className="p-5">
        <h3>Personal Detail</h3>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="input-container mt-3" style={style}>
            <label htmlFor="fname">First Name</label>
            <input
              className="d-inline"
              type="text"
              value={firstName}
              id="fname"
              disabled={disabled}
            />
          </div>

          <div className="input-container mt-3" style={style}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              value={lastName}
              id="lname"
              disabled={disabled}
            />
          </div>

          <div className="input-container mt-3" style={style}>
            <label htmlFor="gender">Gender</label>
            <input type="text" value={gender} id="gender" disabled={disabled} />
          </div>

          <div className="input-container mt-3" style={style}>
            <label htmlFor="mt">Mother Tongue</label>
            <input
              type="text"
              value={motherTongue}
              id="mt"
              disabled={disabled}
            />
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    </>
  );
}

export default PersonalDetails;

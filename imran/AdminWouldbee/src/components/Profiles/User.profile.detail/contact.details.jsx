import React , { useState } from 'react'
 
function ContactDetails(props) {
    const {data, style, disabled}= props;
    const {email, phone}= data;
    return (
        <>
            <div className="p-5 col-6">
            <h3>Contact Detail</h3>

            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="phone">Phone</label>
              <input
                className="w-100"
                type="text"
                value={"+91 " + phone}
                id="phone"
                disabled={disabled}
              />
            </div>

            <div className="input-container mr-3 mt-3 w-100" style={style}>
              <label htmlFor="email">Email</label>
              <input
                className="w-100"
                type="text"
                value={email}
                id="email"
                disabled={disabled}
              />
            </div>
          </div>
        </>
  )
}
 
export default ContactDetails;
 
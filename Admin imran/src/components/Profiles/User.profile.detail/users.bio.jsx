import React, { useState } from "react";

function Bio() {
  return (
    <>
      <div className="p-4 col-6">
        <h3>Partner Prefenrences</h3>
        <div className="input-container mr-3 mt-3 w-100">
          <label htmlFor="bio">Bio</label>
          <input
            className="w-100"
            type="text"
            value={bio.bio}
            id="living"
            disabled={disabled}
          />
        </div>
        <div className="input-container mr-3 mt-3 w-100">
          <label htmlFor="bioUpdatedOn">Bio</label>
          <input
            className="w-100"
            type="text"
            value={bio.updatedOn}
            id="living"
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
}

export default Bio;

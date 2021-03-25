import React, { useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { useMutation, useQuery } from "@apollo/client";
import {
  APPROVE_BIO,
  DIS_APPROVE_BIO,
} from "../../../graphql/queries/user.query";

const Bio = (props) => {
  const { disabled, bio, userId } = props;
  const [bioData, setBioData] = useState({
    bio: bio.bio,
    isApproved: bio.isApproved,
  });

  const approvedOrNot = bioData.isApproved ? (
    <CheckCircleRoundedIcon style={{ color: "#5DADE2" }} />
  ) : (
    <CancelRoundedIcon style={{ color: "#EC7063" }} />
  );

  const [approveBio, ApprovedData] = useMutation(APPROVE_BIO);
  const [disapproveBio, DisApprovedData] = useMutation(
    DIS_APPROVE_BIO
  );
  useEffect(() => {
    if (ApprovedData.data) {
      setBioData((prevValue) => ({
        ...prevValue,
        isApproved: ApprovedData.data.approveBio.isApproved,
      }));
      console.log(ApprovedData.data.approveBio);
    }
  }, [ApprovedData.data]);

  useEffect(()=>{
    if(DisApprovedData.data) {
      setBioData((prevValue)=>({
        ...prevValue,
        isApproved: DisApprovedData.data.approveBio.isApproved,
      }));
      console.log(DisApprovedData.data.approveBio)
    }
  }, [DisApprovedData.data])

  return (
    <>
      <div className="p-5">
        <h3>Bio</h3>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <p className="my-2">Approved : {approvedOrNot}</p>
            <div className="ml-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  approveBio({
                    variables: { id: userId, isApproved: true },
                  });
                }}
                className="btn btn-warning m-2"
              >
                Approve
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  disapproveBio({
                    variables: { id: userId, isApproved: false, reason: "Other" },
                  });
                }}
                className="btn btn-danger"
              >
                Disapprove
              </button>
            </div>
          </div>

          <textarea
            className="p-3"
            disabled={disabled}
            name="bio"
            id="bio"
            cols="30"
            rows="10"
          >
            {bioData.bio}
          </textarea>
        </div>
      </div>
    </>
  );
};

export default Bio;

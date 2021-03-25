import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_THE_USER } from "../../graphql/queries/user.query";
import PersonalDetails from "./User.profile.detail/personal.detail";
import AddressDetails from "./User.profile.detail/Address.detail";
import ContactDetails from "./User.profile.detail/contact.details";
import EditDoneBtn from "./User.profile.detail/Edit.Done.btn";
import PartnerPreference from "./User.profile.detail/Partner.preferences";
import Head from "./User.profile.detail/head";
import ProfilePic from "./User.profile.detail/Profile.pic";
import Bio from "./User.profile.detail/BioDetail";

function Userboard() {
  const [id, setId] = useState(localStorage.getItem("profile-of-user"));
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (disabled === true) {
      setStyle({});
    } else {
      setStyle({
        border: "solid 1px #ccc",
        position: "relative",
        width: "fit-content",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
      });
    }
  }, [disabled]);

  const { data, loading, error } = useQuery(GET_THE_USER, {
    variables: { id },
  });

  if (error) console.log(error);
  if (loading) return <h5>Loading...</h5>;

  const { isApproved, profileManagedBy, pictures, city, bio } = data.user.profile;

  return (
    <>
      {/* <AutoComplete /> */}
      <div className="mx-3 my-5 col-9">
        <div>
          <Head
            style={style}
            disabled={disabled}
            profileManagedBy={profileManagedBy}
            isApproved={isApproved}
            data={data}
          />

          <PersonalDetails
            style={style}
            disabled={disabled}
            data={data.user.profile}
          />
        </div>

        <div className="mx-5 my-3 d-flex flex-row profile_pic_parent">
          {pictures.map((pic, i) => {
            return <ProfilePic pic={pic} />;
          })}
        </div>

        <Bio style={style} disabled={disabled} userId={id} bio={bio} /> 

        <div className="d-flex justify-content-evenly">
          <ContactDetails style={style} disabled={disabled} data={data.user} />

          <AddressDetails style={style} disabled={disabled} city={city} />
        </div>

        <div>
          <PartnerPreference
            style={style}
            disabled={disabled}
            data={data.user.profile.partnerPreference}
          />
        </div>
      </div>

      {/* ------- EDIT AND DONE BUTTON WITH APPROVE STATEMENT */}
      <EditDoneBtn
        style={style}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    </>
  );
}

export default Userboard;

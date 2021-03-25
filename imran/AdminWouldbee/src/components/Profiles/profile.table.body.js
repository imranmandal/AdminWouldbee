import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROFILES } from "../../graphql/queries/user.query";
import { useHistory } from "react-router";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

function TableBody(props) {
  const { search, filter, setFilter } = props;

  const history = useHistory();
  const { data, loading, error } = useQuery(GET_PROFILES, {
    variables: {
      search: search,
      gender: filter.gender,
      isApproved: filter.isApproved,
      start: filter.start,
      end: filter.end,
      skip: filter.skip,
      take: filter.take,
    },
  });

  useEffect(()=>{
    console.log(data);
  });

  if (loading) return <h5>Loading...</h5>;

  const profiles = data.profileList.values;
  localStorage.setItem('profile-count', data.profileList.count);

  const handleClick = (e) => {
    localStorage.setItem("profile-of-user", e.target.getAttribute("value"));
    history.push("/profiles/user-profile");
  };

  function getDate(date) {
    const newDate = new Date(date);
    const localDate = newDate.toLocaleDateString();
    return localDate;
  }

  return (
    <>
      <tbody>
        {profiles.map((user, index) => (
          <tr onClick={handleClick} className="userRow" key={user.id}>
            <th value={user.id} scope="row">
              {index + 1}
            </th>
            <td value={user.id}> {user.firstName} </td>
            <td value={user.id}> {user.lastName} </td>
            <td value={user.id}> {user.gender} </td>
            <td value={user.id}> {getDate(user.createdOn)} </td>
            <td value={user.id} style={{ textAlign: "center" }}>
              {user.isApproved ? (
                <CheckCircleRoundedIcon style={{ color: "#5DADE2" }} />
              ) : (
                <CancelRoundedIcon style={{ color: "#EC7063" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableBody;

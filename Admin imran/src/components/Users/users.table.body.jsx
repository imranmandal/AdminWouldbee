import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/queries/user.query";
import { useHistory } from "react-router";

function TableBody(props) {
  const search = props.search;
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_ALL_USERS, {
    variables: { search },
  });

  if (loading) return <h5>Loading...</h5>;

  const users = data.userList.values;

  // const handleClick = (e) => {
  //   localStorage.setItem("profile-of-user", e.target.getAttribute("value"));
  //   history.push("/dash/user-profile");
  // };
  return (
    <>
      <tbody>
        {users.map((user, index) => (
          <tr 
          // onClick={handleClick}
           className="userRow" key={user.id}>
            <th value={user.id} scope="row">
              {index + 1}
            </th>
            <td value={user.id}> {user.email} </td>
            <td value={user.id}> {user.phone} </td>
            <td value={user.id}>{user.createdOn} </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default TableBody;

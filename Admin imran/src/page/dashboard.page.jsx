import React, { useState } from "react";
import TableBody from "../components/Users/users.table.body";

function Dashboard() {
  const [search, setSearch] = useState("");

  const searchUser = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="mx-3 my-5 col-8">
        <div className="container-fluid p-5 mx-5 tables row">
          <input
            type="text"
            className="form-control w-50 mb-3"
            placeholder="Search"
            onChange={searchUser}
          />
          <table className="table col-12">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th>Created On</th>
              </tr>
            </thead>
            <TableBody search={search} />
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

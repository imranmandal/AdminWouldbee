import React, { useState } from "react";
import TableBody from "../components/Profiles/profile.table.body";
import Filter from "../components/filter-component/Filter";
import PageNavigator from "../components/filter-component/PageNavigator";
import { currentMonthDisplay } from "../components/filter-component/date";

function UserProfile() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState({
    gender: null,
    isApproved: null,
    start: currentMonthDisplay.start,
    end: currentMonthDisplay.end,
    skip: 0,
    take: 10,
  });

  const searchUser = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="profiles mx-0 my-5 d-flex justify-content">
        <div className="container-fluid p-5 mx-3 tables row">
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
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Created On</th>
                <th scope="col">Approved</th>
              </tr>
            </thead>
            <TableBody search={search} filter={filter} setFilter={setFilter} />
          </table>
          <PageNavigator filter={filter} setFilter={setFilter} />
        </div>
        <div className="filter-section p-3 py-5">
          <h3>Filter section</h3>

          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>
    </>
  );
}

export default UserProfile;

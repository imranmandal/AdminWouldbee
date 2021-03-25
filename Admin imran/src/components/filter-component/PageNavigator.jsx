import React, { useState } from "react";

function PageNavigator(props) {
  const { filter, setFilter } = props;
  const [pageCount, setPageCount] = useState(0);
  return (
    <>
    <div className="pageNavigator w-100">
      <button className="btn btn-info m-2"
        disabled={pageCount === 0 ? true : false}
        onClick={() => {
          setFilter((prevValue) =>
            prevValue.skip !== 0
              ? {
                  ...prevValue,
                  skip: prevValue.skip - 10,
                }
                
              : prevValue
          );
          setPageCount(prevValue=> prevValue-1)
        }}
      >
        Previous
      </button>
      <input className="form-control col-2 d-inline text-center" type="text" value={pageCount} disabled />
      <button className="btn btn-info m-2"
        onClick={() => {
          setFilter((prevValue) => ({
            ...prevValue,
            skip: prevValue.skip + 10,
          }));
          setPageCount(prevValue=> prevValue+1)
        }}
      >
        Next
      </button>
    </div>
      
    </>
  );
}

export default PageNavigator;

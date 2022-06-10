import React, { useState } from "react";
import Other from "./Other";
import PersonalDetails from "./PersonalDetails";
import Register from "./Register";
import Success from "./Success";

function UserForm() {
  const [page, setPage] = useState(0);

  const titles = ["Register", "Please help us know more about you", "Other"];

  const DisplayPage = () => {
    if (page === 0) {
      return <Register />;
    } else if (page === 1) {
      return <PersonalDetails />;
    } else if (page === 2) {
      return <Other />;
    } else if (page === 3) {
      return <Success />;
    }
  };

  return (
    <div className="form">
      <div className="progress_bar">
        <div
          className="progress_level"
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="head">
        <h2>{titles[page]}</h2>
      </div>
      <div className="main">{DisplayPage()}</div>
      <div className="buttons">
        <button
          className="btn"
          disabled={page === 0}
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
        >
          Prev
        </button>

        {page <= 1 ? (
          <button
            className="btn"
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={page === 3}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Submit Form
          </button>
        )}
      </div>
    </div>
  );
}

export default UserForm;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CardJob = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.arbeitnow.com/api/job-board-api?")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
      })
      .catch({});
  }, []);

  const handleText = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(120, 300) + "...";
    }
  };

  console.log(data);

  return (
    <div className="container">
      <div className="flex" style={{ justifyContent: "center" }}>
        {data !== null &&
          data.map((res) => {
            return (
              <>
                <div className="card my-3" style={{ width: "100%", background:'#D6F9DD'}}>
                  <div className="card-body">
                    <h5 className="card-title">{res.company_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {res.title}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {res.job_types}
                    </h6>
                    <p className="card-text">{handleText(res.description)}</p>
                    <p className="card-text" style={{ marginTop: "10px" }}>
                      Location : {res.location}
                    </p>
                    <a
                      href={res.url}
                      className="d-flex card-link"
                      style={{
                        background: "#ABDF75",
                        textDecoration: "none",
                        color: "#499658",
                        width: "100%",
                        justifyContent:"center",
                        alignItems: "center",
                        height: "40px",
                        borderRadius: "10px"
                      }}
                    >
                      Registers
                    </a>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CardJob;

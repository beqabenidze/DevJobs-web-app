import React from "react";
import data from "../data.json";
import { Context } from "../context";
import { useContext } from "react";

function Apply() {
  const { itemID } = useContext(Context);

  const dataID = data.filter((item) => item.id == itemID);

  return dataID.map((item) => {
    return (
      <div className="apply" key={item.id}>
        <div className="apply-flex">
          <div>
            <ul>
              <li>{item.postedAt}</li>
              <li>{item.contract}</li>
            </ul>
            <h1>{item.position}</h1>
            <h6>{item.location}</h6>
          </div>
          <a href={item.apply}>
            <button>Apply Now</button>
          </a>
        </div>
        <p>{item.description}</p>
        <h1>Requirements</h1>
        <p>{item.requirements.content}</p>
        <ul>
          {item.requirements.items.map((requirement) => {
            let i = 0;
            i++;
            return <li key={requirement}>{requirement}</li>;
          })}
        </ul>
        <h1>What You Will Do</h1>
        <p>{item.role.content}</p>
        <ol>
          {item.role.items.map((requirement) => {
            return <li key={requirement}>{requirement}</li>;
          })}
        </ol>
      </div>
    );
  });
}

export default Apply;

import React from "react";
import { Link, useParams } from "react-router-dom";
import Table from "../../components/table/Table";
import { userRows } from "../../datatablesource";
import Chart from "../../components/chart/Chart";

const Single = () => {
  let param = useParams();
  let persons = userRows.filter((item) => item.id == param.id);
  return (
    <>
      {persons.map((person) => (
        <div key={person.id} className="container_person">
          <div className="person_data">
            <div className="edit_button">
              <Link to={`/new/${person.id}`} className="linknav">
                Edit
              </Link>
            </div>
            <h1 className="title">Information</h1>
            <div className="imge-container">
              <img
                src={person.img}
                alt={person.username}
                className="imge"
              ></img>
              <div className="details">
                <div className="details_item">
                  <span className="item_key">Email:</span>
                  <span className="item_value">{person.email}</span>
                </div>
                <div className="details_item">
                  <span className="item_key">Phone:</span>
                  <span className="item_value">{person.phone}</span>
                </div>
                <div className="details_item">
                  <span className="item_key">Address:</span>
                  <span className="item_value">{person.address}</span>
                </div>
                <div className="details_item">
                  <span className="item_key">Country:</span>
                  <span className="item_value">{person.country}</span>
                </div>
              </div>
            </div>
            <div className="title_person">
              <h1>{person.username}</h1>
            </div>
          </div>
          <div className="person_chart">
            <Chart
              title={`Last 6 Months (${person.username})`}
              aspect={2 / 1}
            />
          </div>
        </div>
      ))}
      <div className="list_container">
        <div className="list_title">Latest Transactions</div>
        <Table />
      </div>
    </>
  );
};

export default Single;

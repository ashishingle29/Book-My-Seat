import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import reactLogo from "../assets/boy.png";
import "./AllTheater.css";

function AllTheater() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/get");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [data]);
  // console.log(data);

  if (data) {
    const theaters = data.data.theater;

    return (
      <div className="all">
        <div className="header">
          <h1>Ticket Haven</h1>
          <img src={reactLogo} className="logo" alt="logo" />
        </div>
        <div className="theater_list">
          {theaters.map((theater) => (
            <NavLink to={`/book-seat/${theater._id}`} exact className="navlink">
              <div className="theaters">
                <h2>{theater.theaterName}</h2>
                <div className="seat_price">
                  {theater.seatCategory.map((seatCategory) => (
                    <div className="seat_category">
                      <p>{seatCategory.categoryName}</p>
                      <p>{seatCategory.categoryPrice}</p>
                    </div>
                  ))}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default AllTheater;

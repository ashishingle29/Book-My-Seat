import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import reactLogo from "../assets/boy.png";
import "./TheaterSeat.css";

function TheaterSeat() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedCat, setSelectedCat] = useState("Standard");
  const [selectedIndex, setSelectedIndex] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/get/${id}`);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [id]);

  const qtySelection = (e) => {
    setSelectedQty(parseInt(e.target.value));
  };

  const catSelection = (e) => {
    setSelectedCat(e.target.value);
  };

  if (data) {
    const theater = data.data.theater;


    let bookedSeatStandard = theater.seatCategory[0].bookedSeat;
    let bookedSeatPremium = theater.seatCategory[1].bookedSeat;
    
    function clolorChange(index, selectedCatagory) {
      
      if (selectedCat == selectedCatagory && selectedCat == "Standard") 
      {
        let selectedSeatArr = [...bookedSeatStandard];

        selectedSeatArr[index] = 1;

        setSelectedIndex(selectedSeatArr);
        console.log(index, selectedCatagory, selectedSeatArr)
      }

      if (selectedCat == selectedCatagory && selectedCatagory == "Premium") 
      {
        let selectedSeatArr = [...bookedSeatPremium];

        selectedSeatArr[index] = 1;

        setSelectedIndex(selectedSeatArr);
        console.log(index, selectedCatagory, selectedSeatArr)
      }
    }

    const createTable = (rows, columns, selectedCatagory) => {
      const tableRows = [];
      let cellIndex = 0;
      for (let i = 0; i < rows; i++) {
        const tableCells = [];
        for (let j = 0; j < columns; j++) {
          const index = i * columns + j;

          const seatColor =
          selectedIndex[index] === 1 ? "green" : selectedIndex[index] === 2 ? "gray" : "";
          const color = selectedIndex[index] === 1 ? "white" : selectedIndex[index] === 2 ? "green" : "";
          const seatEvent = selectedIndex[index] === 1 ? "none" : "";

          tableCells.push(
            <td
              key={`cell-${cellIndex}`}
              className="table-cell"
              style={{ backgroundColor: seatColor, pointerEvents: seatEvent, color: color }}
              onClick={() => clolorChange(index, selectedCatagory)}
            >
              {cellIndex + 1}
            </td>
          );
          cellIndex++;
        }
        tableRows.push(
          <tr key={`row-${i}`} className="table-row">
            {tableCells}
          </tr>
        );
      }
      return (
        <table className="table">
          <tbody>{tableRows}</tbody>
        </table>
      );
    };

    const AlphabetTable = (rowCount) => {
      // Function to generate an array of alphabets
      const generateAlphabets = (rowCount) => {
        const alphabets = [];
        for (let i = 0; i < rowCount; i++) {
          alphabets.push(String.fromCharCode(65 + i));
        }
        return alphabets;
      };

      return (
        <table className="alphaID">
          <tbody>
            {generateAlphabets(rowCount).map((alphabet, index) => (
              <tr key={index}>
                <td>{alphabet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

    let standardSelect = theater.seatCategory[0].categoryName;
    let standardPrice = theater.seatCategory[0].categoryPrice;
    let standardRow = theater.seatCategory[0].rowCount;
    let standardColumn = theater.seatCategory[0].columnCount;

    let premiumRow = theater.seatCategory[1].rowCount;
    let premiumColumn = theater.seatCategory[1].columnCount;
    let premiumPrice = theater.seatCategory[1].categoryPrice;
    let premiumSelect = theater.seatCategory[1].categoryName;

    return (
      <div className="App">
        <div className="nav">
          <h1>Ticket Haven</h1>
          <img src={reactLogo} className="logo" alt="logo" />
        </div>
        <div className="selector">
          <div>
            <p>Seat Category</p>
            <select onChange={catSelection}>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div>
            <p>Seat Qty</p>
            <select className="qty" onChange={qtySelection}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="body">
          <div className="premium">
            <p>PREMIUM-Rs. {premiumPrice}.00</p>
            <div>
              {AlphabetTable(premiumRow)}
              {createTable(premiumRow, premiumColumn, premiumSelect)}
            </div>
          </div>

          <div className="standard">
            <p>STANDARD-Rs. {standardPrice}.00</p>
            <div>
              {AlphabetTable(standardRow)}
              {createTable(standardRow, standardColumn, standardSelect)}
            </div>
          </div>
          <div className="trapezoid"></div>
          <p className="meme">open your eyes and see</p>
        </div>
        <div className="apply">
          <p className="fstP">Selected Seats : {"PRE-A5"}</p>
          <p>Total Price : {160}</p>
          <button className="orderBtn">Submit</button>
        </div>
      </div>
    );
  }
}

export default TheaterSeat;

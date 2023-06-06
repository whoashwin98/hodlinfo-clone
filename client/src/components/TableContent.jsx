import React, { useEffect, useState } from "react";

const TableContent = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3001/getdata", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="fiat-crypto-table table-responsive"
      style={{ margin: "0px auto" }}
    >
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            <th>
              <h4>
                <span className="pointer">Name</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Last Traded Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Buy / Sell Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Volume</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Base Unit</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => {
            return (
              <tr>
                <td className="align-middle">
                  <h4 className="fw-bold">{crypto.name}</h4>
                </td>
                <td className="align-middle">
                  <h4 className="fw-light">₹ {crypto.last}</h4>
                </td>
                <td className="align-middle">
                  <h4 className="fw-normal">
                    <span className="color-green">₹ {crypto.buy}</span> /{" "}
                    <span className="color-red">₹ {crypto.sell}</span>
                  </h4>
                </td>
                <td className="align-middle">
                  <h4 className="fw-light">{crypto.volume}</h4>
                </td>
                <td className="align-middle">
                  <h4 className="fw-bold">{crypto.base_unit.toUpperCase()}</h4>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;

import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      {props.results.map((result) => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Ashley</td>
            <td>Bartholomew</td>
            <td>31</td>
          </tr>
        </table>
      ))}
    </table>
  );
}

export default ResultList;
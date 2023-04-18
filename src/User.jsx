import { useState } from "react";
import { useEffect } from "react";
import Layout from "./Layout";
import Home from "./Home";
import Admin from "./Admin";

const User = ({
  employees,
  navigateToHome,
  navigateToUser,
  navigateToAdmin,
}) => {
  const [sector, setSector] = useState(null);

  if (sector === "Admin") {
    return (
      <Admin
        employees={employees}
        navigateToHome={navigateToHome}
        navigateToUser={navigateToUser}
        navigateToAdmin={navigateToAdmin}
      />
    );
  } else if (sector === "Home") {
    return (
      <Home
        employees={employees}
        navigateToHome={navigateToHome}
        navigateToUser={navigateToUser}
        navigateToAdmin={navigateToAdmin}
      />
    );
  } else {
    return (
      <div>
        <h1>
          Generation Thailand <br /> Home - User Sector
        </h1>
        <button onClick={navigateToHome}>Home Sector</button>
        <button onClick={navigateToAdmin}>Admin Home Sector</button>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
};

export default User;

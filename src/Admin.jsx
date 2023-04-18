import React, { useState } from "react";
import Layout from "./Layout";
import Home from "./Home";
import User from "./User";

const Admin = ({
  employees,
  navigateToHome,
  navigateToUser,
  navigateToAdmin,
}) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();
  const [employeesList, setEmployeesList] = useState(employees);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleSave = () => {
    const newEmployee = {
      id: employeesList.length + 1,
      name: name,
      lastname: lastname,
      position: position,
    };

    setEmployeesList([...employeesList, newEmployee]);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employeesList.filter((item) => item.id !== id);
    setEmployeesList(updatedEmployees);
  };

  const [sector, setSector] = useState(null);

  if (sector === "User") {
    return (
      <User
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
          Generation Thailand <br /> Home - Admin Sector
        </h1>
        <button onClick={navigateToHome}>Home Sector</button>
        <button onClick={navigateToUser}>User Home Sector</button>
        <div>
          <p>Create User Here</p>
          <input type="text" placeholder="Name" onChange={handleName} />
          <input type="text" placeholder="LastName" onChange={handleLastname} />
          <input type="text" placeholder="Position" onChange={handlePosition} />
          <button onClick={handleSave}>SAVE</button>
        </div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
};

export default Admin;

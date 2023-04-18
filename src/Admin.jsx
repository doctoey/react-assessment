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
        id: employeesList.length > 0 ? employeesList[employeesList.length - 1].id + 1 : 0,
        name: name,
        lastname: lastname,
        position: position,
    };

    setEmployeesList([...employeesList, newEmployee]);
    console.log(employeesList)
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
      <div className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh", backgroundColor: "#ADC5B7" }}>
      <div className="text-center">
        <h1>
          Generation Thailand <br /> Home - Admin Sector
        </h1>
        <button className="btn btn-dark mt-3 mr-2"
        onClick={navigateToHome}>Home Sector</button>
        <button className="btn btn-light mt-3"
        onClick={navigateToUser}>User Home Sector</button>
        <div className="mt-4">
        <div>
          <h5>Create User Here</h5>
          <input type="text" placeholder="Name" onChange={handleName} />
          <input type="text" placeholder="LastName" onChange={handleLastname} />
          <input type="text" placeholder="Position" onChange={handlePosition} />
          <button className="btn btn-light rounded-pill px-3"
          onClick={handleSave}>SAVE</button>
        </div>
        </div>
        <table className="table mt-4">
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
                  <button className="btn btn-danger rounded-pill px-3"
                  onClick={() => handleDelete(item.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
        </div>
      </div>
    );
  }
};

export default Admin;

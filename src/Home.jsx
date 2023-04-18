import Navbar from "./Navbar";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import Admin from "./Admin";
import User from "./User";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState(null);

  useEffect(() => {
    setEmployees(mockEmployees);
  }, []);

  const navigateToHome = () => {
    setSector("Home");
  };

  const navigateToUser = () => {
    setSector("User");
  };

  const navigateToAdmin = () => {
    setSector("Admin");
  };

  if (sector === "User") {
    return (
      <Layout>
        <User
          employees={employees}
          navigateToHome={navigateToHome}
          navigateToUser={navigateToUser}
          navigateToAdmin={navigateToAdmin}
        />
      </Layout>
    );
  } else if (sector === "Admin") {
    return (
      <Layout>
        <Admin
          employees={employees}
          navigateToHome={navigateToHome}
          navigateToUser={navigateToUser}
          navigateToAdmin={navigateToAdmin}
        />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh", backgroundColor: "#ADC5B7" }} >
          <div className="text-center">
            <h1>
              Generation Thailand <br /> React - Assessment
            </h1>
            <button
              className="btn btn-dark mt-3 mr-2"
              onClick={() => setSector("User")}
              style={{ color: "white", backgroundColor: "black" }}>
              User Home Sector
            </button>
            <button
              className="btn btn-light mt-3"
              onClick={() => setSector("Admin")}>
              Admin Home Sector
            </button>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Home;

import Navbar from './Navbar'
import Layout from './Layout'
import { useEffect, useState } from "react"
import Admin from './Admin'
import User from './User'

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {


const [employees, setEmployees] = useState(mockEmployees)
const [sector, setSector] = useState(null)

const employeeShow = (employee) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.lastname}</td>
      <td>{employee.position}</td>
    </tr>
  )
}

useEffect(() => {
  setEmployees(mockEmployees)
}, []);

const navigateToHome = () => {
  setSector('Home');
};

const navigateToUser = () => {
  setSector('User');
};

const navigateToAdmin = () => {
  setSector('Admin');
};


if (sector === 'User') {
  return (
      <Layout>
          <User employees={employees}
            navigateToHome={navigateToHome}
            navigateToUser={navigateToUser}
            navigateToAdmin={navigateToAdmin}
          />
      </Layout>
  )
} else if (sector === 'Admin') {
  return (
    <Layout>
        <Admin employees={employees}
          navigateToHome={navigateToHome}
          navigateToUser={navigateToUser}
          navigateToAdmin={navigateToAdmin}
        />
    </Layout>
  )
} else {

  return (
    <Layout>
        <h1>Generation Thailand <br/> React - Assessment</h1>

        <button onClick={() => setSector('User')} >User Home Sector</button>
        <button onClick={() => setSector('Admin')} >Admin Home Sector</button>


    </Layout>
  )
}
}

export default Home

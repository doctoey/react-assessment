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


const [employees, setEmployees] = useState('Home')
const [sector, setSector] = useState()

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
}, [Home]);

if (sector === 'User') {
  return (
      <Layout>
          <User />
      </Layout>
  )
} else if (sector === 'Admin') {
  return (
    <Layout>
        <Admin />
    </Layout>
  )
} else {
  return (
    <Layout>
        
        <button onClick={() => setSector('User')} >User Home Sector</button>
        <button onClick={() => setSector('Admin')} >Admin Home Sector</button>

        {/* {mockEmployees.map(employeeShow)} */}

    </Layout>
  )
}
}

export default Home

import { useState } from "react"
import { useEffect } from "react"
import Layout from "./Layout"
import Home from "./Home"
import User from "./User"

const Admin = (props) => {
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

    const [employees, setEmployees] = useState(mockEmployees);
    const [sector, setSector] = useState()

    if (sector === 'User') {
        return (
            <div>
                <User />
            </div>
        )
      } else if (sector === 'Home') {
        return (
          <div>
              <Home />
          </div>
        )
      } else {
        return (
          <div>
            admin
            <button onClick={() => setSector("User")}>User Home Sector</button>
            <button onClick={() => setSector("Home")}>Home Sector</button>
            <table>
              <tr>
                <th>name</th>
                <th>lastname</th>
                <th>position</th>
              </tr>
              {employees.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.position}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      }

    // return (
    //     <div>
    //     admin
    //     <button onClick={() => setSector('User')} >User Home Sector</button>
    //     <button onClick={() => setSector('Admin')} >Admin Home Sector</button>

    //     </div>
        
    // )
}

export default Admin
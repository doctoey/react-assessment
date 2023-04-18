import React, { useState } from "react";
import Layout from "./Layout"
import Home from "./Home"
import User from "./User"

const Admin = ({employees,navigateToHome,navigateToUser,navigateToAdmin}) => {

    const [sector, setSector] = useState(null)

    if (sector === 'User') {
        return (

                <User employees={employees}
                    navigateToHome={navigateToHome}
                    navigateToUser={navigateToUser}
                    navigateToAdmin={navigateToAdmin} 
                />

        )
      } else if (sector === 'Home') {
        return (

              <Home employees={employees}
                navigateToHome={navigateToHome}
                navigateToUser={navigateToUser}
                navigateToAdmin={navigateToAdmin}
              />

        )
      } else {
        return (
          <div>
            
            <h1>Generation Thailand <br/> Home - Admin Sector</h1>
            <button onClick={navigateToHome}>Home Sector</button>
            <button onClick={navigateToUser}>User Home Sector</button>
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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState([
    {
      id: 2,
      name: "Pratik",
      userName: "admin",
      email: "admin@gmail.com",
    },
    {
      id: 52,
      name: "Ashu",
      userName: "ashu123",
      email: "ashu@gmail.com",
    },
    {
      id: 53,
      name: "AbhiNew11",
      userName: "adminNew11",
      email: "Abhi111@gmail.com",
    },
    {
      id: 57,
      name: "Shriram ",
      userName: "ram123",
      email: "ram@gmail.com",
    },
    {
      id: 58,
      name: "Rutik",
      userName: "rutya ",
      email: "rutya123@gmail.com",
    },
    {
      id: 60,
      name: "sudarshan",
      userName: "admin",
      email: "admin@gmail.com",
    },
    {
      id: 102,
      name: "Harshavardhan",
      userName: "harshu123",
      email: "harshu@gmail.com",
    },
  ]);

  const { id } = useParams();

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:8080/users");
  //   setUsers(result.data);
  // };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };

  const deleteUser = (userId) => {
     let filteredArr = users?.filter((el) => el.id !== userId);
     setUsers([...filteredArr])
    }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                    state={user}

                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

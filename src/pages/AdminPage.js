import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/trial").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div style={{ padding: "20px", color: "#333" }}>
      <h2>Admin Panel – Probetraining Nutzer</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              Name
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              E-Mail
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              Startdatum
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              Enddatum
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td style={{ padding: "10px" }}>
                {user.firstName} {user.lastName}
              </td>
              <td style={{ padding: "10px" }}>{user.email}</td>
              <td style={{ padding: "10px" }}>{user.startDate}</td>
              <td style={{ padding: "10px" }}>{user.endDate}</td>
              <td
                style={{
                  padding: "10px",
                  color: user.status === "Aktiv" ? "green" : "red",
                }}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;

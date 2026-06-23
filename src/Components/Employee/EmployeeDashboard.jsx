import React from "react";
import {
  LuClock3,
  LuCalendarDays,
  LuUserCheck,
  LuUsers,
} from "react-icons/lu";

export default function EmployeeDashboard() {
  return (
    <div style={styles.container}>
      {/* Top Work Log Card */}
      <div style={styles.workLog}>
        <div>
          <h3>Work Log</h3>

          <div style={styles.timeRow}>
            <div>
              <small>Check-In</small>
              <h4>09:00:00</h4>
            </div>

            <div>
              <small>Check-Out</small>
              <h4>06:00:00</h4>
            </div>
          </div>
        </div>

        <div style={styles.timerSection}>
          <h1>04:29:19</h1>
          <p>Current Working Time</p>
        </div>

        <div>
          <small>Break Time</small>
          <h4>00:30:00</h4>
        </div>
      </div>

      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <LuCalendarDays size={30} />
          <h3>20</h3>
          <p>Monthly Attendance</p>
        </div>

        <div style={styles.statCard}>
          <LuClock3 size={30} />
          <h3>100</h3>
          <p>Monthly Hours</p>
        </div>

        <div style={styles.statCard}>
          <LuUserCheck size={30} />
          <h3>2</h3>
          <p>Monthly Late</p>
        </div>

        <div style={styles.statCard}>
          <LuUsers size={30} />
          <h3>7</h3>
          <p>Leaves</p>
        </div>
      </div>

      {/* Team Summary */}
      <div style={styles.summaryGrid}>
        <div style={styles.summaryCard}>
          <h4>Present</h4>
          <h2>10</h2>
        </div>

        <div style={styles.summaryCard}>
          <h4>Absent</h4>
          <h2>3</h2>
        </div>

        <div style={styles.summaryCard}>
          <h4>Full Day</h4>
          <h2>8</h2>
        </div>

        <div style={styles.summaryCard}>
          <h4>Half Day</h4>
          <h2>2</h2>
        </div>
      </div>

      {/* Attendance Table */}
      <div style={styles.tableCard}>
        <h3>Recent Attendance</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>22-06-2026</td>
              <td>09:00 AM</td>
              <td>06:00 PM</td>
              <td>Present</td>
            </tr>

            <tr>
              <td>21-06-2026</td>
              <td>09:15 AM</td>
              <td>06:05 PM</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
  width: "100%",
  minHeight: "100vh",
  padding: "30px",
  boxSizing: "border-box",
  backgroundColor: "#f8fafc",
},

  workLog: {
  background: "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "#fff",
  borderRadius: "16px",
  padding: "30px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  marginBottom: "25px",
  boxShadow: "0 10px 25px rgba(239,68,68,.25)",
},

  timeRow: {
    display: "flex",
    gap: "40px",
    marginTop: "15px",
  },

  timerSection: {
    textAlign: "center",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  statCard: {
  background: "#fff",
  borderRadius: "16px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,.08)",
  border: "1px solid #e5e7eb",
  transition: "0.3s",
},

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  summaryCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
  },

  tableCard: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
  },

  table: {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  },

  th: {
  padding: "15px",
  backgroundColor: "#f8fafc",
  textAlign: "left",
  borderBottom: "1px solid #e5e7eb",
  },

  td: {
  padding: "15px",
  borderBottom: "1px solid #f1f5f9",
  },

  actionSection: {
  display: "flex",
  gap: "15px",
  marginBottom: "25px",
  },

  checkInBtn: {
  background: "#22c55e",
  color: "#fff",
  border: "none",
  padding: "12px 25px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  },

  checkOutBtn: {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "12px 25px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  },


};

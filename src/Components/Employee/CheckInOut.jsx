import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaClock,
  FaCoffee,
  FaCalendarAlt,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const CheckInOut = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("--:--");
  const [checkOutTime, setCheckOutTime] = useState("--:--");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleCheckIn = () => {
    setCheckedIn(true);
    setCheckInTime(new Date().toLocaleTimeString());
    setCheckOutTime("--:--");
  };

  const handleCheckOut = () => {
    setCheckedIn(false);
    setCheckOutTime(new Date().toLocaleTimeString());
  };

  return isMobile ? (
    <MobileView
      checkedIn={checkedIn}
      checkInTime={checkInTime}
      checkOutTime={checkOutTime}
      handleCheckIn={handleCheckIn}
      handleCheckOut={handleCheckOut}
    />
  ) : (
    <DesktopView
      checkedIn={checkedIn}
      checkInTime={checkInTime}
      checkOutTime={checkOutTime}
      handleCheckIn={handleCheckIn}
      handleCheckOut={handleCheckOut}
    />
  );
};

const MobileView = ({
  checkedIn,
  handleCheckIn,
  handleCheckOut,
}) => {
  return (
    <div style={styles.mobilePage}>
      <div style={styles.mobileCard}>
        <div style={styles.header}>
          <div>
            <h3 style={{ margin: 0 }}>
              Good Morning 👋
            </h3>
            <p style={styles.subtitle}>
              Have a productive day
            </p>
          </div>

          <div style={styles.bell}>
            <FaBell />
          </div>
        </div>

        <div style={styles.topCard}>
          <div style={styles.topRow}>
            <div>
              <h1 style={styles.time}>
                {new Date().toLocaleTimeString()}
              </h1>
              <small>
                {new Date().toDateString()}
              </small>
            </div>

            <div style={styles.goalCircle}>
              <span>Goal</span>
              <strong>8h</strong>
            </div>
          </div>

          <div style={styles.statsRow}>
            <div>
              <FaClock />
              <p>Worked</p>
              <strong>09:00</strong>
            </div>

            <div>
              <FaCalendarAlt />
              <p>Check In</p>
              <strong>09:00</strong>
            </div>

            <div>
              <FaCoffee />
              <p>Break</p>
              <strong>00:30</strong>
            </div>
          </div>
        </div>

        <div style={styles.circleWrapper}>
          <div style={styles.outerCircle}>
            <div style={styles.middleCircle}>
              <button
                style={styles.checkBtn}
                onClick={
                  checkedIn
                    ? handleCheckOut
                    : handleCheckIn
                }
              >
                {checkedIn
                  ? "Check Out"
                  : "Check In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopView = ({
  checkedIn,
  checkInTime,
  checkOutTime,
  handleCheckIn,
  handleCheckOut,
}) => {
  return (
    <div style={styles.desktopContainer}>
      <div style={styles.banner}>
        <h2>Attendance Management</h2>
        <p>
          Track attendance and working hours
        </p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.card}>
          <h3>22</h3>
          <p>Present Days</p>
        </div>

        <div style={styles.card}>
          <h3>08:30</h3>
          <p>Today's Hours</p>
        </div>

        <div style={styles.card}>
          <h3>2</h3>
          <p>Leaves</p>
        </div>

        <div style={styles.card}>
          <h3>96%</h3>
          <p>Attendance</p>
        </div>
      </div>

      <div style={styles.actionCard}>
        <button
          style={styles.checkInButton}
          onClick={handleCheckIn}
        >
          <FaSignInAlt />
          Check In
        </button>

        <button
          style={styles.checkOutButton}
          onClick={handleCheckOut}
        >
          <FaSignOutAlt />
          Check Out
        </button>
      </div>

      <div style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <h4>Check In</h4>
          <h2>{checkInTime}</h2>
        </div>

        <div style={styles.infoCard}>
          <h4>Check Out</h4>
          <h2>{checkOutTime}</h2>
        </div>

        <div style={styles.infoCard}>
          <h4>Status</h4>
          <h2>
            {checkedIn
              ? "Checked In"
              : "Checked Out"}
          </h2>
        </div>
      </div>

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
              <td>23-06-2026</td>
              <td>09:00 AM</td>
              <td>06:00 PM</td>
              <td>Present</td>
            </tr>

            <tr>
              <td>22-06-2026</td>
              <td>09:10 AM</td>
              <td>06:05 PM</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  mobilePage: {
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "20px",
  },

  mobileCard: {
    maxWidth: "420px",
    margin: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  subtitle: {
    color: "#666",
    margin: 0,
  },

  bell: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  topCard: {
    background:
      "linear-gradient(135deg,#5b4cf0,#2d1c8d)",
    color: "#fff",
    padding: "20px",
    borderRadius: "20px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  time: {
    margin: 0,
    fontSize: "26px",
  },

  goalCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: "4px solid white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  statsRow: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    textAlign: "center",
  },

  circleWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  outerCircle: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    background: "#ece8ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  middleCircle: {
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "#ddd6ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  checkBtn: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    border: "none",
    background: "#5b4cf0",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  desktopContainer: {
    padding: "30px",
  },

  banner: {
    background:
      "linear-gradient(135deg,#5b4cf0,#2d1c8d)",
    color: "#fff",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "25px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow:
      "0 2px 10px rgba(0,0,0,.08)",
  },

  actionCard: {
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
  },

  checkInButton: {
    flex: 1,
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: "#22c55e",
    color: "#fff",
    cursor: "pointer",
  },

  checkOutButton: {
    flex: 1,
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  infoCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow:
      "0 2px 10px rgba(0,0,0,.08)",
  },

  tableCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default CheckInOut;

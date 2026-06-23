import React, { useEffect, useState } from "react";
import { LuMonitor, LuClock3, LuTimer } from "react-icons/lu";

export default function EmployeeScreenTime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    return `${String(hrs).padStart(2, "0")}:${String(
      mins
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Live Screen Time</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <LuMonitor size={35} />
          <h3>Status</h3>
          <p>Active</p>
        </div>

        <div style={styles.card}>
          <LuClock3 size={35} />
          <h3>Login Time</h3>
          <p>09:00 AM</p>
        </div>

        <div style={styles.card}>
          <LuTimer size={35} />
          <h3>Running Time</h3>
          <p>{formatTime(seconds)}</p>
        </div>
      </div>

      <div style={styles.timerCard}>
        <h3>Today's Screen Time</h3>
        <h1>{formatTime(seconds)}</h1>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
  },

  title: {
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
  },

  timerCard: {
    marginTop: "25px",
    background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    color: "#fff",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
  },
};
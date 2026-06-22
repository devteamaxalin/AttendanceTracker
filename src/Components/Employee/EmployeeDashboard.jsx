
// export default function EmployeeDashboard() {
//   return <h1>Employee Dashboard</h1>;
// }

import React from 'react';

export default function EmployeeDashboard() {
  // Mock data for the attendance logging history table
  const recentLogs = [
    { date: '2026-06-19', checkIn: '09:02 AM', checkOut: '05:30 PM', status: 'On Time' },
    { date: '2026-06-18', checkIn: '09:15 AM', checkOut: '05:45 PM', status: 'Late Check-In' },
    { date: '2026-06-17', checkIn: '08:55 AM', checkOut: '05:15 PM', status: 'On Time' },
    { date: '2026-06-16', checkIn: '09:00 AM', checkOut: '05:30 PM', status: 'On Time' },
  ];

  return (
    <div style={styles.container}>
      {/* Upper Banner Section */}
      <div style={styles.welcomeBanner}>
        <h1 style={styles.title}>Dashboard Overview</h1>
        <p style={styles.subtitle}>Track your performance parameters, hours logged, and attendance records.</p>
      </div>

      {/* Analytics Matrix Summary Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.card}>
          <span style={{ ...styles.cardIcon, backgroundColor: '#eff6ff', color: '#2563eb' }}>⏱️</span>
          <div>
            <h3 style={styles.cardTitle}>Hours Logged</h3>
            <p style={styles.cardValue}>38.5 <span style={styles.unit}>hrs</span></p>
            <span style={styles.cardTrend}>This week</span>
          </div>
        </div>

        <div style={styles.card}>
          <span style={{ ...styles.cardIcon, backgroundColor: '#f0fdf4', color: '#166534' }}>📊</span>
          <div>
            <h3 style={styles.cardTitle}>Attendance Rate</h3>
            <p style={styles.cardValue}>96%</p>
            <span style={{ ...styles.cardTrend, color: '#166534' }}>Excellent</span>
          </div>
        </div>

        <div style={styles.card}>
          <span style={{ ...styles.cardIcon, backgroundColor: '#fdf2f8', color: '#9d174d' }}>📅</span>
          <div>
            <h3 style={styles.cardTitle}>Available Leaves</h3>
            <p style={styles.cardValue}>12 <span style={styles.unit}>Days</span></p>
            <span style={styles.cardTrend}>Annual balance</span>
          </div>
        </div>
      </div>

      {/* Main Bottom Section: Data Ledger Table */}
      <div style={styles.tableSection}>
        <h2 style={styles.sectionHeading}>Recent Attendance Logs</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thRow}>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Check In</th>
                <th style={styles.th}>Check Out</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLogs.map((log, index) => (
                <tr key={index} style={styles.tr}>
                  <td style={styles.td}>{log.date}</td>
                  <td style={styles.td}>{log.checkIn}</td>
                  <td style={styles.td}>{log.checkOut}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.badge,
                      backgroundColor: log.status === 'On Time' ? '#e6f4ea' : '#feebec',
                      color: log.status === 'On Time' ? '#137333' : '#c5221f'
                    }}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Clean Dashboard Layout CSS-in-JS Style Definitions
const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  welcomeBanner: {
    marginBottom: '32px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 6px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    margin: 0,
  },
  statsGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  card: {
    flex: '1 1 280px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  cardIcon: {
    fontSize: '22px',
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#64748b',
    margin: '0 0 4px 0',
  },
  cardValue: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 2px 0',
  },
  unit: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748b',
  },
  cardTrend: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '500',
  },
  tableSection: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  sectionHeading: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 20px 0',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '14px',
  },
  thRow: {
    borderBottom: '2px solid #edf2f7',
  },
  th: {
    padding: '12px 16px',
    fontWeight: '600',
    color: '#4a5568',
    backgroundColor: '#f8fafc',
  },
  tr: {
    borderBottom: '1px solid #edf2f7',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '16px',
    color: '#2d3748',
  },
  badge: {
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-block',
  }
};
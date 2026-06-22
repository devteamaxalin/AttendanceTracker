

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // Import professional vector icons
// import { LuLayoutDashboard, LuCalendarDays, LuUser, LuLogOut } from 'react-icons/lu';

// export default function EmployeeMenu({ onLogout }) {
//   const getNavLinkStyle = ({ isActive }) => ({
//     ...styles.navLink,
//     ...(isActive ? styles.navLinkActive : {})
//   });

//   return (
//     <aside style={styles.sidebar}>
//       <div style={styles.brandSection}>
//         <div style={styles.logoCircle}>EP</div>
//         <div>
//           <h2 style={styles.brandName}>Portal</h2>
//           <span style={styles.brandStatus}>Employee View</span>
//         </div>
//       </div>

//       <nav style={styles.navGroup}>
//         <NavLink to="/employee/dashboard" style={getNavLinkStyle}>
//           <LuLayoutDashboard style={styles.icon} /> Dashboard Home
//         </NavLink>

//         <NavLink to="/employee/leave" style={getNavLinkStyle}>
//           <LuCalendarDays style={styles.icon} /> Apply for Leave
//         </NavLink>

//         <NavLink to="/employee/profile" style={getNavLinkStyle}>
//           <LuUser style={styles.icon} /> My Profile
//         </NavLink>

//         <hr style={styles.separator} />

//         <button onClick={onLogout} style={styles.logoutButton}>
//           <LuLogOut style={styles.icon} /> Sign Out
//         </button>
//       </nav>
//     </aside>
//   );
// }

// const styles = {
//   sidebar: {
//     width: '260px',
//     backgroundColor: '#f8fafc',
//     borderRight: '1px solid #e2e8f0',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '24px 16px',
//     height: '100%',
//     boxSizing: 'border-box',
//   },
//   brandSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', paddingLeft: '8px' },
//   logoCircle: { width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#4f46e5', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '14px' },
//   brandName: { fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 },
//   brandStatus: { fontSize: '12px', color: '#64748b', fontWeight: '500' },
//   navGroup: { display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 },
//   navLink: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '12px 14px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#475569',
//     textDecoration: 'none',
//     borderRadius: '8px',
//     transition: 'all 0.15s ease-in-out',
//   },
//   navLinkActive: {
//     backgroundColor: '#ffffff',
//     color: '#4f46e5',
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
//     border: '1px solid #e2e8f0',
//   },
//   icon: { 
//     fontSize: '18px', // Size of the vector icon
//     flexShrink: 0 
//   },
//   separator: {
//     border: 'none',
//     borderTop: '1px solid #e2e8f0',
//     margin: '12px 0',
//     width: '100%'
//   },
//   logoutButton: { 
//     display: 'flex', 
//     alignItems: 'center', 
//     gap: '12px', 
//     padding: '12px 14px', 
//     backgroundColor: 'transparent', 
//     color: '#ef4444', 
//     border: 'none', 
//     borderRadius: '8px', 
//     fontSize: '14px', 
//     fontWeight: '600', 
//     cursor: 'pointer', 
//     textAlign: 'left',
//     width: '100%',
//     transition: 'all 0.15s ease-in-out',
//   }
// };




import React from 'react';
import { NavLink } from 'react-router-dom';
// Imported LuClock for the screening time menu item
import { LuLayoutDashboard, LuCalendarDays, LuClock, LuUser, LuLogOut } from 'react-icons/lu';

export default function EmployeeMenu({ onLogout }) {
  const getNavLinkStyle = ({ isActive }) => ({
    ...styles.navLink,
    ...(isActive ? styles.navLinkActive : {})
  });

  return (
    <aside style={styles.sidebar}>
      <div style={styles.brandSection}>
        <div style={styles.logoCircle}>EP</div>
        <div>
          <h2 style={styles.brandName}>Portal</h2>
          <span style={styles.brandStatus}>Employee View</span>
        </div>
      </div>

      <nav style={styles.navGroup}>
        <NavLink to="/employee/dashboard" style={getNavLinkStyle}>
          <LuLayoutDashboard style={styles.icon} /> Dashboard Home
        </NavLink>

        <NavLink to="/employee/leave" style={getNavLinkStyle}>
          <LuCalendarDays style={styles.icon} /> Apply for Leave
        </NavLink>

        {/* NEW MENU ITEM: Live Screen Time */}
        <NavLink to="/employee/screening-time" style={getNavLinkStyle}>
          <LuClock style={styles.icon} /> Live Screen Time
        </NavLink>

        <NavLink to="/employee/profile" style={getNavLinkStyle}>
          <LuUser style={styles.icon} /> My Profile
        </NavLink>

        <hr style={styles.separator} />

        <button onClick={onLogout} style={styles.logoutButton}>
          <LuLogOut style={styles.icon} /> Sign Out
        </button>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '260px',
    backgroundColor: '#f8fafc',
    borderRight: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 16px',
    height: '100%',
    boxSizing: 'border-box',
  },
  brandSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', paddingLeft: '8px' },
  logoCircle: { width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#4f46e5', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '14px' },
  brandName: { fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 },
  brandStatus: { fontSize: '12px', color: '#64748b', fontWeight: '500' },
  navGroup: { display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 14px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#475569',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.15s ease-in-out',
  },
  navLinkActive: {
    backgroundColor: '#ffffff',
    color: '#4f46e5',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
  },
  icon: { 
    fontSize: '18px', 
    flexShrink: 0 
  },
  separator: {
    border: 'none',
    borderTop: '1px solid #e2e8f0',
    margin: '12px 0',
    width: '100%'
  },
  logoutButton: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    padding: '12px 14px', 
    backgroundColor: 'transparent', 
    color: '#ef4444', 
    border: 'none', 
    borderRadius: '8px', 
    fontSize: '14px', 
    fontWeight: '600', 
    cursor: 'pointer', 
    textAlign: 'left',
    width: '100%',
    transition: 'all 0.15s ease-in-out',
  }
};
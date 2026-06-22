// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function Login() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     if (!username || !password) return alert('Please fill in all fields');
    
// //     setLoading(true);

// //     // Mock API call delay
// //     setTimeout(() => {
// //       if (username === 'admin' && password === 'admin123') {
// //         localStorage.setItem('token', 'secure-jwt-token-xyz');
// //         localStorage.setItem('role', 'admin');
// //         navigate('/admin');
// //       } else if (username === 'employee' && password === 'emp123') {
// //         localStorage.setItem('token', 'secure-jwt-token-xyz');
// //         localStorage.setItem('role', 'employee');
// //         navigate('/employee');
// //       } else {
// //         alert('Invalid credentials. Hint: use admin/admin123 or employee/emp123');
// //       }
// //       setLoading(false);
// //     }, 1000);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.card}>
// //         <div style={styles.header}>
// //           <h2 style={styles.title}>Welcome Back</h2>
// //           <p style={styles.subtitle}>Sign in to your Attendance Portal account</p>
// //         </div>

// //         <form onSubmit={handleLogin} style={styles.form}>
// //           <div style={styles.inputGroup}>
// //             <label style={styles.label}>Username or Email</label>
// //             <input
// //               type="text"
// //               placeholder="Enter your username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               style={styles.input}
// //               required
// //             />
// //           </div>

// //           <div style={styles.inputGroup}>
// //             <label style={styles.label}>Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               style={styles.input}
// //               required
// //             />
// //           </div>

// //           <div style={styles.utilities}>
// //             <label style={styles.rememberMe}>
// //               <input type="checkbox" style={styles.checkbox} />
// //               Remember me
// //             </label>
// //             <a href="#forgot" style={styles.forgotLink}>Forgot password?</a>
// //           </div>

// //           <button 
// //             type="submit" 
// //             disabled={loading} 
// //             style={{ 
// //               ...styles.button, 
// //               ...(loading ? styles.buttonDisabled : {}) 
// //             }}
// //           >
// //             {loading ? 'Signing in...' : 'Sign In'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // Minimal, Modern CSS-in-JS object architecture
// // const styles = {
// //   container: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     minHeight: '100vh',
// //     width: '100vw',
// //     backgroundColor: '#f3f4f6',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //     boxSizing: 'border-box',
// //     margin: 0,
// //     padding: '20px',
// //   },
// //   card: {
// //     width: '100%',
// //     maxWidth: '420px',
// //     backgroundColor: '#ffffff',
// //     borderRadius: '12px',
// //     padding: '40px 32px',
// //     boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '32px',
// //   },
// //   title: {
// //     fontSize: '28px',
// //     fontWeight: '700',
// //     color: '#1f2937',
// //     margin: '0 0 8px 0',
// //   },
// //   subtitle: {
// //     fontSize: '14px',
// //     color: '#6b7280',
// //     margin: 0,
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '20px',
// //   },
// //   inputGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '6px',
// //   },
// //   label: {
// //     fontSize: '14px',
// //     fontWeight: '500',
// //     color: '#4b5563',
// //   },
// //   input: {
// //     padding: '12px 16px',
// //     fontSize: '15px',
// //     borderRadius: '8px',
// //     border: '1px solid #d1d5db',
// //     backgroundColor: '#ffffff',
// //     color: '#1f2937',
// //     outline: 'none',
// //     transition: 'border-color 0.2s, box-shadow 0.2s',
// //   },
// //   utilities: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     fontSize: '14px',
// //   },
// //   rememberMe: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     color: '#4b5563',
// //     cursor: 'pointer',
// //   },
// //   checkbox: {
// //     accentColor: '#2563eb',
// //     cursor: 'pointer',
// //   },
// //   forgotLink: {
// //     color: '#2563eb',
// //     textDecoration: 'none',
// //     fontWeight: '500',
// //   },
// //   button: {
// //     width: '100%',
// //     padding: '12px',
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     color: '#ffffff',
// //     backgroundColor: '#2563eb',
// //     border: 'none',
// //     borderRadius: '8px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.2s',
// //     marginTop: '10px',
// //   },
// //   buttonDisabled: {
// //     backgroundColor: '#93c5fd',
// //     cursor: 'not-allowed',
// //   }
// // };





// import React, { useState } from 'react';

// // Simple Inline Component Framework for the Menus
// const EmployeeMenu = ({ onLogout }) => (
//   <div style={styles.dashboardContainer}>
//     <h2 style={styles.title}>👷 Employee Workspace</h2>
//     <p style={styles.subtitle}>Welcome to your attendance control deck.</p>
//     <div style={styles.menuBox}>
//       <button style={styles.menuItem}>📅 View Attendance Log</button>
//       <button style={styles.menuItem}>📝 Apply for Leave</button>
//       <button style={styles.menuItem}>👤 Update Profile Details</button>
//     </div>
//     <button onClick={onLogout} style={styles.logoutButton}>Sign Out</button>
//   </div>
// );

// const AdminMenu = ({ onLogout }) => (
//   <div style={styles.dashboardContainer}>
//     <h2 style={styles.title}>⚡ Admin Command Center</h2>
//     <p style={styles.subtitle}>System-wide configurations and personnel logs.</p>
//     <div style={styles.menuBox}>
//       <button style={styles.menuItemAdmin}>📊 View Department Analytics</button>
//       <button style={styles.menuItemAdmin}>👥 Manage Employee Profiles</button>
//       <button style={styles.menuItemAdmin}>🔓 Approve Pending Leaves</button>
//     </div>
//     <button onClick={onLogout} style={styles.logoutButton}>Sign Out</button>
//   </div>
// );

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [userRole, setUserRole] = useState(null); // Tracks layout toggle state

//   // Dummy Credentials Store
//   const DUMMY_CREDENTIALS = {
//     admin: { user: 'admin', pass: 'admin123', role: 'admin' },
//     employee: { user: 'emp', pass: 'emp123', role: 'employee' }
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!username || !password) return alert('Please complete all form fields.');
    
//     setLoading(true);

//     // Simulated network processing latency
//     setTimeout(() => {
//       if (username === DUMMY_CREDENTIALS.admin.user && password === DUMMY_CREDENTIALS.admin.pass) {
//         setUserRole('admin');
//       } else if (username === DUMMY_CREDENTIALS.employee.user && password === DUMMY_CREDENTIALS.employee.pass) {
//         setUserRole('employee');
//       } else {
//         alert('Access Denied. Incorrect username or password.');
//       }
//       setLoading(false);
//     }, 800);
//   };

//   const handleLogout = () => {
//     setUserRole(null);
//     setUsername('');
//     setPassword('');
//   };

//   // --- Conditional Rendering Core Logic ---
//   if (userRole === 'employee') {
//     return (
//       <div style={styles.container}>
//         <div style={styles.card}><EmployeeMenu onLogout={handleLogout} /></div>
//       </div>
//     );
//   }

//   if (userRole === 'admin') {
//     return (
//       <div style={styles.container}>
//         <div style={styles.card}><AdminMenu onLogout={handleLogout} /></div>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>Secure Portal Access</h2>
//           <p style={styles.subtitle}>Sign in with management or personnel configurations</p>
//         </div>

//         <form onSubmit={handleLogin} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Username</label>
//             <input
//               type="text"
//               placeholder="Admin: admin | Employee: emp"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               type="password"
//               placeholder="Admin: admin123 | Employee: emp123"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//               required
//             />
//           </div>

//           <button 
//             type="submit" 
//             disabled={loading} 
//             style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
//           >
//             {loading ? 'Validating Authenticity...' : 'Authorize Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // Complete CSS-in-JS Layout Stylesheet
// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     width: '100vw',
//     backgroundColor: '#f3f4f6',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
//     boxSizing: 'border-box',
//     margin: 0,
//     padding: '20px',
//   },
//   card: {
//     width: '100%',
//     maxWidth: '440px',
//     backgroundColor: '#ffffff',
//     borderRadius: '16px',
//     padding: '40px 32px',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '32px',
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#111827',
//     margin: '0 0 8px 0',
//   },
//   subtitle: {
//     fontSize: '14px',
//     color: '#6b7280',
//     margin: 0,
//     lineHeight: '1.4'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   inputGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//   },
//   label: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   input: {
//     padding: '12px 16px',
//     fontSize: '15px',
//     borderRadius: '8px',
//     border: '1px solid #d1d5db',
//     backgroundColor: '#ffffff',
//     color: '#1f2937',
//     outline: 'none',
//   },
//   button: {
//     width: '100%',
//     padding: '14px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#ffffff',
//     backgroundColor: '#4f46e5',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     marginTop: '10px',
//   },
//   buttonDisabled: {
//     backgroundColor: '#a5b4fc',
//     cursor: 'not-allowed',
//   },
//   dashboardContainer: {
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px'
//   },
//   menuBox: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     margin: '20px 0'
//   },
//   menuItem: {
//     padding: '12px',
//     backgroundColor: '#f0fdf4',
//     border: '1px solid #bbf7d0',
//     color: '#166534',
//     borderRadius: '8px',
//     fontWeight: '500',
//     textAlign: 'left',
//     cursor: 'pointer'
//   },
//   menuItemAdmin: {
//     padding: '12px',
//     backgroundColor: '#eff6ff',
//     border: '1px solid #bfdbfe',
//     color: '#1e40af',
//     borderRadius: '8px',
//     fontWeight: '500',
//     textAlign: 'left',
//     cursor: 'pointer'
//   },
//   logoutButton: {
//     padding: '10px',
//     backgroundColor: '#ef4444',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     fontWeight: '600',
//     cursor: 'pointer'
//   }
// };




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Dummy Credentials Store
  const DUMMY_CREDENTIALS = {
    admin: { user: 'admin', pass: 'admin123' },
    employee: { user: 'emp', pass: 'emp123' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return alert('Please complete all form fields.');
    
    setLoading(true);

    // Simulated network processing latency
    setTimeout(() => {
      if (username === DUMMY_CREDENTIALS.admin.user && password === DUMMY_CREDENTIALS.admin.pass) {
        localStorage.setItem('role', 'admin');
        navigate('/admin'); // Redirects to Admin workspace
      } else if (username === DUMMY_CREDENTIALS.employee.user && password === DUMMY_CREDENTIALS.employee.pass) {
        localStorage.setItem('role', 'employee');
        navigate('/employee'); // Redirects to Employee workspace
      } else {
        alert('Access Denied. Incorrect username or password.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Secure Portal Access</h2>
          <p style={styles.subtitle}>Sign in with management or personnel configurations</p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              placeholder="Admin: admin | Employee: emp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Admin: admin123 | Employee: emp123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
          >
            {loading ? 'Validating Authenticity...' : 'Authorize Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif', margin: 0, padding: '20px', boxSizing: 'border-box' },
  card: { width: '100%', maxWidth: '440px', backgroundColor: '#ffffff', borderRadius: '16px', padding: '40px 32px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' },
  header: { textAlign: 'center', marginBottom: '32px' },
  title: { fontSize: '24px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' },
  subtitle: { fontSize: '14px', color: '#6b7280', margin: 0 },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '600', color: '#374151' },
  input: { padding: '12px 16px', fontSize: '15px', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none' },
  button: { width: '100%', padding: '14px', fontSize: '15px', fontWeight: '600', color: '#ffffff', backgroundColor: '#4f46e5', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' },
  buttonDisabled: { backgroundColor: '#a5b4fc', cursor: 'not-allowed' }
};
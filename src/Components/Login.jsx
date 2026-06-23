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
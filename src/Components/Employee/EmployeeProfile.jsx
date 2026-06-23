import React, { useState } from 'react';
import { LuUser, LuMail, LuPhone, LuBuilding, LuCalendar, LuShieldCheck, LuSave } from 'react-icons/lu';

export default function EmployeeProfile() {
  // Mock profile data state
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 019-2834',
    department: 'Engineering',
    role: 'Full Stack Engineer',
    employeeId: 'EMP-2026-8842',
    joinDate: 'January 15, 2024'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API update call
    setTimeout(() => {
      setIsSaving(false);
      alert('Profile details updated successfully!');
    }, 800);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>My Profile</h1>
        <p style={styles.subtitle}>Manage your personal credentials, contact parameters, and company details.</p>
      </div>

      <div style={styles.profileLayout}>
        {/* Left Side: Summary Card */}
        <div style={styles.leftCard}>
          <div style={styles.avatarLarge}>
            {profile.firstName[0]}{profile.lastName[0]}
          </div>
          <h2 style={styles.profileName}>{profile.firstName} {profile.lastName}</h2>
          <span style={styles.profileRoleBadge}>{profile.role}</span>
          
          <div style={styles.metaList}>
            <div style={styles.metaItem}>
              <LuShieldCheck style={styles.metaIcon} />
              <div>
                <span style={styles.metaLabel}>ID Tag</span>
                <span style={styles.metaValue}>{profile.employeeId}</span>
              </div>
            </div>
            <div style={styles.metaItem}>
              <LuCalendar style={styles.metaIcon} />
              <div>
                <span style={styles.metaLabel}>Joined On</span>
                <span style={styles.metaValue}>{profile.joinDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Editable Details Form */}
        <div style={styles.rightFormCard}>
          <h3 style={styles.sectionHeading}>Personal Details</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGrid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>First Name</label>
                <div style={styles.inputWrapper}>
                  <LuUser style={styles.inputIcon} />
                  <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Last Name</label>
                <div style={styles.inputWrapper}>
                  <LuUser style={styles.inputIcon} />
                  <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <div style={styles.inputWrapper}>
                  <LuMail style={styles.inputIcon} />
                  <input type="email" name="email" value={profile.email} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <div style={styles.inputWrapper}>
                  <LuPhone style={styles.inputIcon} />
                  <input type="tel" name="phone" value={profile.phone} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              {/* Department Option - NOW ENABLED */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Department</label>
                <div style={styles.inputWrapper}>
                  <LuBuilding style={styles.inputIcon} />
                  <input type="text" name="department" value={profile.department} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              {/* Job Title Option - NOW ENABLED */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Job Title</label>
                <div style={styles.inputWrapper}>
                  <LuShieldCheck style={styles.inputIcon} />
                  <input type="text" name="role" value={profile.role} onChange={handleChange} style={styles.input} required />
                </div>
              </div>
            </div>

            <div style={styles.formFooter}>
              <button type="submit" disabled={isSaving} style={styles.saveButton}>
                <LuSave style={{ fontSize: '16px' }} />
                {isSaving ? 'Saving Changes...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Profile Layout System Style definitions
const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', boxSizing: 'border-box' },
  headerSection: { marginBottom: '32px' },
  title: { fontSize: '28px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' },
  subtitle: { fontSize: '15px', color: '#64748b', margin: 0 },
  profileLayout: { display: 'flex', gap: '24px', flexWrap: 'wrap' },
  
  // Left Sidebar Summary Profile Box
  leftCard: {
    flex: '1 1 280px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
    height: 'fit-content'
  },
  avatarLarge: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    backgroundColor: '#eff6ff',
    color: '#4f46e5',
    fontSize: '28px',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '16px',
    border: '4px solid #f8fafc'
  },
  profileName: { fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' },
  profileRoleBadge: { fontSize: '13px', fontWeight: '600', color: '#4f46e5', backgroundColor: '#eeebff', padding: '4px 12px', borderRadius: '20px', marginBottom: '24px' },
  metaList: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' },
  metaItem: { display: 'flex', alignItems: 'center', gap: '12px' },
  metaIcon: { fontSize: '18px', color: '#94a3b8' },
  metaLabel: { display: 'block', fontSize: '11px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase' },
  metaValue: { display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155' },

  // Right Editable Configuration Panel 
  rightFormCard: {
    flex: '2 1 550px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  sectionHeading: { fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 24px 0' },
  form: { display: 'flex', flexDirection: 'column', gap: '24px' },
  formGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#475569' },
  inputWrapper: { position: 'relative', display: 'flex', alignItems: 'center' },
  inputIcon: { position: 'absolute', left: '14px', color: '#94a3b8', fontSize: '16px' },
  input: { width: '100%', padding: '12px 14px 12px 40px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', color: '#334155', boxSizing: 'border-box' },
  formFooter: { borderTop: '1px solid #e2e8f0', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' },
  saveButton: { display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '14px', fontWeight: '600', color: '#ffffff', backgroundColor: '#4f46e5', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.15s' }
};
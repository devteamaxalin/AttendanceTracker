

import React, { useState } from 'react';
import { LuCalendarPlus, LuCalendarDays, LuSend, LuClock } from 'react-icons/lu';

export default function Leave() {
  const [formData, setFormData] = useState({
    leaveType: 'Casual Leave',
    startDate: '',
    endDate: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock historic records database state
  const [leaveHistory, setLeaveHistory] = useState([
    { id: 'LV-401', type: 'Medical Leave', duration: 'Jun 10 - Jun 12', days: 3, status: 'Approved' },
    { id: 'LV-382', type: 'Casual Leave', duration: 'May 04 - May 04', days: 1, status: 'Rejected' },
    { id: 'LV-209', type: 'Maternity/Paternity', duration: 'Apr 01 - Apr 05', days: 5, status: 'Approved' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database request latency
    setTimeout(() => {
      const durationStr = `${formData.startDate} to ${formData.endDate}`;
      
      const newRequest = {
        id: `LV-${Math.floor(100 + Math.random() * 900)}`,
        type: formData.leaveType,
        duration: durationStr,
        days: 2, 
        status: 'Pending'
      };

      setLeaveHistory([newRequest, ...leaveHistory]);
      setIsSubmitting(false);
      alert('Leave application forwarded successfully.');
      
      // Reset layout fields
      setFormData({ leaveType: 'Casual Leave', startDate: '', endDate: '', reason: '' });
    }, 900);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Time-off Management</h1>
        <p style={styles.subtitle}>Submit new absence requests and audit your processing timeline logs.</p>
      </div>

      <div style={styles.mainLayout}>
        {/* Left Side Panel: Application Form */}
        <div style={styles.formCard}>
          <h2 style={styles.sectionTitle}><LuCalendarPlus /> Apply for Leave</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Leave Category Type</label>
              <select name="leaveType" value={formData.leaveType} onChange={handleChange} style={styles.select}>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Medical Leave">Medical Leave (Sick)</option>
                <option value="Maternity/Paternity">Maternity / Paternity</option>
                <option value="Unpaid Leave">Unpaid Privilege Leave</option>
              </select>
            </div>

            <div style={styles.rowGrid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Start Date</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={styles.input} required />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>End Date</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} style={styles.input} required />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Reason for Absence</label>
              <textarea name="reason" rows="4" placeholder="Brief details supporting your request details..." value={formData.reason} onChange={handleChange} style={styles.textarea} required />
            </div>

            <button type="submit" disabled={isSubmitting} style={styles.submitButton}>
              <LuSend style={{ fontSize: '16px' }} />
              {isSubmitting ? 'Processing Submission...' : 'Submit Application'}
            </button>
          </form>
        </div>

        {/* Right Side Panel: Status Tracker History */}
        <div style={styles.historyCard}>
          <h2 style={styles.sectionTitle}><LuCalendarDays /> Application Status History</h2>
          <div style={styles.listWrapper}>
            {leaveHistory.map((item) => (
              <div key={item.id} style={styles.historyItem}>
                <div style={styles.itemHeader}>
                  <span style={styles.itemId}>{item.id}</span>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: item.status === 'Approved' ? '#e6f4ea' : item.status === 'Pending' ? '#fef7e0' : '#feebec',
                    color: item.status === 'Approved' ? '#137333' : item.status === 'Pending' ? '#b06000' : '#c5221f'
                  }}>
                    <LuClock style={{ fontSize: '12px' }} /> {item.status}
                  </span>
                </div>
                <h4 style={styles.itemType}>{item.type}</h4>
                <p style={styles.itemDuration}>{item.duration} • <strong style={{color: '#475569'}}>{item.days} Days</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Styling blueprint dictionary mapping card panels
const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', boxSizing: 'border-box' },
  headerSection: { marginBottom: '32px' },
  title: { fontSize: '28px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' },
  subtitle: { fontSize: '15px', color: '#64748b', margin: 0 },
  mainLayout: { display: 'flex', gap: '24px', flexWrap: 'wrap' },
  
  // Left Entry Card Layout Blueprint
  formCard: { flex: '1 1 500px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.01)' },
  sectionTitle: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 24px 0' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  rowGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#475569' },
  select: { width: '100%', padding: '12px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', color: '#334155', backgroundColor: '#fff', boxSizing: 'border-box' },
  input: { width: '100%', padding: '12px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', color: '#334155', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px 14px', fontSize: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', color: '#334155', fontFamily: 'inherit', boxSizing: 'border-box', resize: 'vertical' },
  submitButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', fontSize: '15px', fontWeight: '600', color: '#ffffff', backgroundColor: '#4f46e5', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.15s', marginTop: '10px' },
  
  // Right Entry Track Status Panel Blueprint
  historyCard: { flex: '1 1 400px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.01)', height: 'fit-content' },
  listWrapper: { display: 'flex', flexDirection: 'column', gap: '14px' },
  historyItem: { padding: '16px', border: '1px solid #e2e8f0', borderRadius: '10px', backgroundColor: '#f8fafc' },
  itemHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
  itemId: { fontSize: '12px', fontWeight: '700', color: '#94a3b8' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' },
  itemType: { fontSize: '15px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' },
  itemDuration: { fontSize: '13px', color: '#64748b', margin: 0 }
};
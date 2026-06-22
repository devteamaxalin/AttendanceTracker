import React, { useState, useEffect } from 'react';
import { LuClock, LuTimer, LuMonitor, LuCheckCircle, LuAlertCircle } from 'react-icons/lu';

export default function ScreenTime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Simulated initial login timestamp (e.g., employee logged in 2 hours and 14 minutes ago)
  const [loginTimestamp] = useState(
    new Date(Date.now() - 2 * 60 * 60 * 1000 - 14 * 60 * 1000).toISOString()
  );

  // Daily target session hours (e.g., standard 8-hour shift)
  const targetShiftHours = 8;

  // Ticks the current runtime clock engine forward every second
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // Compute exact duration differences mathematically against the static login timestamp anchor
  const calculateElapsedSession = (isoString) => {
    const loginDate = new Date(isoString);
    const diffInMs = currentTime - loginDate;

    if (diffInMs < 0) return { string: '00:00:00', totalSeconds: 0 };

    const totalSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');
    return {
      string: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
      totalSeconds
    };
  };

  const sessionData = calculateElapsedSession(loginTimestamp);

  // Calculate percentage progress toward completing a standard shift target
  const targetSeconds = targetShiftHours * 3600;
  const progressPercentage = Math.min(
    Math.floor((sessionData.totalSeconds / targetSeconds) * 100), 
    100
  );

  const formatLocalTime = (isoString) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Live Session Status</h1>
        <p style={styles.subtitle}>Monitor your authenticated work session duration and active screen telemetry.</p>
      </div>

      <div style={styles.dashboardGrid}>
        {/* PRIMARY RUNTIME COUNTER BLOCK */}
        <div style={styles.timerCard}>
          <div style={styles.cardHeader}>
            <span style={styles.cardLabel}>ACTIVE SHIFT RUNTIME</span>
            <span style={styles.liveBadge}><span style={styles.pulseDot} /> LIVE TRACKING</span>
          </div>
          <div style={styles.clockDisplay}>{sessionData.string}</div>
          
          {/* Shift progress metrics bar */}
          <div style={styles.progressContainer}>
            <div style={styles.progressBarWrapper}>
              <div style={{ ...styles.progressBarFill, width: `${progressPercentage}%` }} />
            </div>
            <div style={styles.progressMetaRow}>
              <span style={styles.progressText}>Shift Progress: {progressPercentage}%</span>
              <span style={styles.progressText}>Target: {targetShiftHours}h</span>
            </div>
          </div>
        </div>

        {/* METADATA TELEMETRY PANELS */}
        <div style={styles.metaColumn}>
          <div style={styles.infoRowCard}>
            <div style={{ ...styles.iconSquare, backgroundColor: '#e0e7ff', color: '#4f46e5' }}>
              <LuClock />
            </div>
            <div>
              <div style={styles.infoLabel}>Session Authenticated At</div>
              <div style={styles.infoValue}>{formatLocalTime(loginTimestamp)}</div>
            </div>
          </div>

          <div style={styles.infoRowCard}>
            <div style={{ ...styles.iconSquare, backgroundColor: '#f0fdf4', color: '#16a34a' }}>
              <LuMonitor />
            </div>
            <div>
              <div style={styles.infoLabel}>Terminal Host System</div>
              <div style={styles.infoValue}>Secured Connection ({navigator.platform || 'Web Layout'})</div>
            </div>
          </div>

          <div style={styles.infoRowCard}>
            <div style={{ ...styles.iconSquare, backgroundColor: '#fef3c7', color: '#d97706' }}>
              <LuTimer />
            </div>
            <div>
              <div style={styles.infoLabel}>Current System Clock</div>
              <div style={styles.infoValue}>{currentTime.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLIANCE FOOTER DISCLAIMER */}
      <div style={styles.disclaimerBox}>
        <LuAlertCircle style={styles.disclaimerIcon} />
        <p style={styles.disclaimerText}>
          <strong>Telemetry Note:</strong> Screen metrics are streamed in real time to the administrative command console. Ensure your tasks align with your daily operational workspace targets.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '850px', margin: '0 auto', boxSizing: 'border-box' },
  header: { marginBottom: '28px' },
  title: { fontSize: '26px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' },
  subtitle: { fontSize: '15px', color: '#64748b', margin: 0 },
  dashboardGrid: { display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start', flexWrap: 'wrap' },
  
  /* MAIN STOPWATCH TIMING BOX CARD */
  timerCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', gap: '20px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { fontSize: '12px', fontWeight: '700', color: '#64748b', letterSpacing: '0.5px' },
  liveBadge: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: '#16a34a', backgroundColor: '#dcfce7', padding: '4px 10px', borderRadius: '20px' },
  pulseDot: { width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%' },
  clockDisplay: { fontSize: '48px', fontWeight: '800', color: '#4f46e5', fontFamily: 'monospace', margin: '10px 0' },
  
  /* SHIFT PERFORMANCE LEVEL INDICATOR */
  progressContainer: { display: 'flex', flexDirection: 'column', gap: '8px' },
  progressBarWrapper: { width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#4f46e5', borderRadius: '10px', transition: 'width 1s linear' },
  progressMetaRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  progressText: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
  
  /* TELEMETRY ROW CONTAINER GROUPS */
  metaColumn: { display: 'flex', flexDirection: 'column', gap: '16px' },
  infoRowCard: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.01)' },
  iconSquare: { width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 },
  infoLabel: { fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '2px' },
  infoValue: { fontSize: '15px', fontWeight: '700', color: '#334155' },
  
  /* FOOTER FOOTNOTES BLOCK */
  disclaimerBox: { display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', marginTop: '28px' },
  disclaimerIcon: { color: '#64748b', fontSize: '20px', marginTop: '2px', flexShrink: 0 },
  disclaimerText: { fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }
};
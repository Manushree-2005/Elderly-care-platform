export default function DashboardPage({ analytics, bookings, users, patients, careNotes, onStatusChange }) {
  const styles = {
    card: { background: '#fff', borderRadius: 24, padding: 18, boxShadow: '0 18px 40px rgba(15,23,42,0.10)' },
    title: { fontSize: 24, marginBottom: 8 },
    body: { color: '#334155', lineHeight: 1.5 },
    grid: { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', marginTop: 12 },
    chip: { display: 'inline-block', padding: '4px 8px', borderRadius: 999, fontSize: 12, fontWeight: 700, background: '#dbeafe', color: '#1d4ed8' },
    statusBtn: { border: '1px solid #bfdbfe', borderRadius: 999, padding: '6px 10px', background: '#eff6ff', color: '#1e3a8a', cursor: 'pointer', fontWeight: 700 },
  };

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={styles.title}>Admin & service dashboard</h2>
      <p style={styles.body}>Track requests, patient needs, service quality, and care updates from one dashboard.</p>
      <div style={styles.grid}>
        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#eff6ff 0%, #ffffff 100%)', border: '1px solid #bfdbfe' }}><h3 style={{ marginBottom: 4 }}>KPIs</h3><p style={styles.body}>Registered users {analytics.registeredUsers || 184} · Verified caregivers {analytics.verifiedCaregivers || 36}</p></article>
        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#ecfeff 0%, #ffffff 100%)', border: '1px solid #99f6e4' }}><h3 style={{ marginBottom: 4 }}>Bookings</h3><p style={styles.body}>{bookings.length} requests currently tracked.</p></article>
        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#f0fdf4 0%, #ffffff 100%)', border: '1px solid #bbf7d0' }}><h3 style={{ marginBottom: 4 }}>Patients</h3><p style={styles.body}>{patients.map(p => p.name).join(', ')}</p></article>
        <article style={styles.card}><h3 style={{ marginBottom: 4 }}>Care notes</h3><p style={styles.body}>{careNotes.map(note => note.patient + ': ' + note.note).join(' | ')}</p></article>
        <article style={styles.card}><h3 style={{ marginBottom: 4 }}>User roles</h3><p style={styles.body}>{users.map(u => u.role).join(', ')}</p></article>
      </div>

      <article style={{ ...styles.card, marginTop: 16, background: 'linear-gradient(135deg,#ffffff 0%, #eff6ff 100%)', border: '1px solid #bfdbfe' }}>
        <h3 style={{ marginBottom: 8 }}>Live service tracking</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          {bookings.length ? bookings.map(item => (
            <div key={item.id} style={{ border: '1px solid #dbeafe', borderRadius: 18, padding: 12, background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <strong>{item.patientName || 'Family booking'}</strong>
                <span style={styles.chip}>{item.status || 'Requested'}</span>
              </div>
              <p style={{ ...styles.body, margin: '6px 0 10px' }}>{item.service || 'Care service'} · {item.date || 'Schedule pending'}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button style={styles.statusBtn} onClick={() => onStatusChange && onStatusChange(item.id, 'Accepted')}>Accept</button>
                <button style={styles.statusBtn} onClick={() => onStatusChange && onStatusChange(item.id, 'Completed')}>Complete</button>
                <button style={styles.statusBtn} onClick={() => onStatusChange && onStatusChange(item.id, 'Requested')}>Reset</button>
              </div>
            </div>
          )) : <p style={styles.body}>No booking requests yet. Submit one from the booking page to see live status tracking here.</p>}
        </div>
      </article>
    </section>
  );
}

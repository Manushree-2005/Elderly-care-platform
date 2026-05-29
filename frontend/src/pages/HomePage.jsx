export default function HomePage({ analytics, bookings, users, patients, careNotes }) {
  const styles = {
    hero: { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, marginTop: 20 },
    card: { background: '#fff', borderRadius: 24, padding: 18, boxShadow: '0 18px 40px rgba(15,23,42,0.10)' },
    title: { fontSize: 30, margin: '0 0 10px', lineHeight: 1.2 },
    body: { color: '#334155', lineHeight: 1.5 },
    tag: { display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 },
    statGrid: { display: 'grid', gap: 12, gridTemplateColumns: 'repeat(2,1fr)', marginTop: 14 },
    statBox: { background: 'linear-gradient(135deg,#1d4ed8,#2563eb)', color: '#fff', borderRadius: 18, padding: 14 },
    sectionTitle: { fontSize: 22, marginBottom: 8 },
    small: { color: '#475569', fontSize: 12 },
  };

  return (
    <>
      <section style={styles.hero}>
        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#ffffff 0%, #eff6ff 100%)', border: '1px solid #bfdbfe' }}>
          <p style={styles.tag}>Trusted home care ecosystem</p>
          <h1 style={{ ...styles.title, fontSize: 36 }}>Professional elderly nursing & healthcare assistance for modern families.</h1>
          <p style={styles.body}>A premium platform for booking verified caregivers, managing care schedules, tracking service updates, and improving elderly well-being with clarity and confidence.</p>
          <div style={styles.statGrid}>
            <div style={styles.statBox}><strong>{analytics.registeredUsers || 184}</strong><br />Registered users</div>
            <div style={styles.statBox}><strong>{analytics.verifiedCaregivers || 36}</strong><br />Verified caregivers</div>
            <div style={styles.statBox}><strong>{analytics.bookingCompletionRate || '91%'}</strong><br />Booking completion</div>
            <div style={styles.statBox}><strong>{bookings.length}</strong><br />Live booking requests</div>
          </div>
        </article>

        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#0f172a 0%, #1e293b 100%)', color: '#fff' }}>
          <h2 style={{ ...styles.sectionTitle, color: '#fff' }}>Platform overview</h2>
          <p style={{ ...styles.body, color: '#e2e8f0' }}>Users, patients, caregivers, services, bookings, and care notes are structured to support the full elderly-care journey with clarity and safety.</p>
          <ul style={{ color: '#e2e8f0', lineHeight: 1.7, paddingLeft: 18 }}>
            <li>{users.length} active user roles</li>
            <li>{patients.length} patient profiles created</li>
            <li>{careNotes.length} recent care notes available</li>
          </ul>
          <p style={styles.small}>This page is now opened only from the navbar navigation.</p>
        </article>
      </section>
    </>
  );
}

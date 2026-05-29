export default function CaregiversPage({ caregivers }) {
  const styles = {
    card: { background: '#fff', borderRadius: 24, padding: 18, boxShadow: '0 18px 40px rgba(15,23,42,0.10)' },
    title: { fontSize: 24, marginBottom: 8 },
    body: { color: '#334155', lineHeight: 1.5 },
    grid: { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', marginTop: 12 },
  };

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={styles.title}>Verified caregivers</h2>
      <p style={styles.body}>Every caregiver profile includes specialization, rating, years of experience, and service location.</p>
      <div style={styles.grid}>
        {caregivers.map(caregiver => (
          <article key={caregiver.id} style={{ ...styles.card, background: 'linear-gradient(135deg,#ffffff 0%, #eff6ff 100%)', border: '1px solid #bfdbfe' }}>
            <p style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>⭐ {caregiver.rating}</p>
            <h3 style={{ margin: '8px 0' }}>{caregiver.name}</h3>
            <p style={styles.body}>{caregiver.specialty}</p>
            <p style={styles.body}><strong>Experience:</strong> {caregiver.experience}</p>
            <p style={styles.body}><strong>City:</strong> {caregiver.city}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

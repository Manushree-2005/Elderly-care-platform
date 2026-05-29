export default function ServicesPage({ services }) {
  const styles = {
    card: { background: '#fff', borderRadius: 24, padding: 18, boxShadow: '0 18px 40px rgba(15,23,42,0.10)' },
    title: { fontSize: 24, marginBottom: 8 },
    body: { color: '#334155', lineHeight: 1.5 },
    tag: { display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 },
    grid: { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', marginTop: 12 },
  };

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={styles.title}>Available care services</h2>
      <p style={styles.body}>Each service includes duration, pricing, and required qualification so families can choose the right assistance quickly.</p>
      <div style={styles.grid}>
        {services.map(service => (
          <article key={service.id} style={{ ...styles.card, background: 'linear-gradient(135deg,#ffffff 0%, #eff6ff 100%)', border: '1px solid #bfdbfe' }}>
            <p style={styles.tag}>{service.qualification}</p>
            <h3 style={{ margin: '8px 0' }}>{service.name}</h3>
            <p style={styles.body}>{service.description}</p>
            <p style={styles.body}><strong>{service.duration}</strong> · {service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

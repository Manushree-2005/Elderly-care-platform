export default function BookingPage({ services, caregivers, form, setForm, handleSubmit, submitted }) {
  const styles = {
    card: { background: '#fff', borderRadius: 24, padding: 18, boxShadow: '0 18px 40px rgba(15,23,42,0.10)' },
    title: { fontSize: 24, marginBottom: 8 },
    body: { color: '#334155', lineHeight: 1.5 },
    label: { display: 'block', fontWeight: 700, marginBottom: 6, color: '#0f172a' },
    input: { width: '100%', border: '1px solid #cbd5e1', borderRadius: 12, padding: '10px 12px', marginBottom: 10 },
    button: { background: 'linear-gradient(135deg,#2563eb,#0ea5a4)', color: '#fff', border: 'none', borderRadius: 999, padding: '10px 14px', fontWeight: 800, cursor: 'pointer' },
  };

  return (
    <section style={{ marginTop: 20 }}>
      <h2 style={styles.title}>Book a care service</h2>
      <p style={styles.body}>Choose a service, caregiver, and preferred schedule for your family member.</p>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', marginTop: 12 }}>
        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#eff6ff 0%, #ffffff 100%)', border: '1px solid #bfdbfe' }}>
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Patient name</label>
            <input style={styles.input} value={form.patientName} onChange={e => setForm({ ...form, patientName: e.target.value })} placeholder="Family member name" />
            <label style={styles.label}>Service</label>
            <select style={styles.input} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
              {services.map(service => <option key={service.id} value={service.name}>{service.name}</option>)}
            </select>
            <label style={styles.label}>Caregiver</label>
            <select style={styles.input} value={form.caregiver} onChange={e => setForm({ ...form, caregiver: e.target.value })}>
              {caregivers.map(caregiver => <option key={caregiver.id} value={caregiver.name}>{caregiver.name} · {caregiver.specialty}</option>)}
            </select>
            <label style={styles.label}>City</label>
            <input style={styles.input} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="City" />
            <label style={styles.label}>Preferred date</label>
            <input style={styles.input} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <button style={styles.button} type="submit">Submit booking request</button>
          </form>
          {submitted && <p style={{ ...styles.body, marginTop: 10, color: '#065f46' }}>{submitted}</p>}
        </article>

        <article style={{ ...styles.card, background: 'linear-gradient(135deg,#0f172a 0%, #1e293b 100%)', color: '#fff' }}>
          <h3 style={{ marginBottom: 8 }}>Why families use this</h3>
          <p style={{ color: '#e2e8f0', lineHeight: 1.55 }}>Transparent service choices, verified caregiver profiles, fast scheduling, and simple care tracking all in one place.</p>
        </article>
      </div>
    </section>
  );
}

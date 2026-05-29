export default function FeaturesPage() {
  const features = [
    { title: 'Verified Caregivers', text: 'Trusted nurses, attendants, and physiotherapists with clear qualifications and ratings.' },
    { title: 'Transparent Scheduling', text: 'Fast booking, service duration, and pricing information made simple for families.' },
    { title: 'Care Continuity', text: 'Track updates, care notes, and service history for every elderly support plan.' },
    { title: 'Admin Oversight', text: 'Monitor service quality, complaints, analytics, and escalation workflows in one place.' }
  ];

  return (
    <section style={{ marginTop: 24 }}>
      <h2 style={{ fontSize: 28, marginBottom: 8, color: '#0f172a' }}>Why this platform stands out</h2>
      <p style={{ color: '#334155', maxWidth: 780, lineHeight: 1.6 }}>A professional elderly care experience built around trust, accessibility, and continuity of support for families and caregivers.</p>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', marginTop: 12 }}>
        {features.map((item, index) => (
          <article key={item.title} style={{ background: 'linear-gradient(135deg,#ffffff 0%, #eff6ff 100%)', borderRadius: 24, padding: 18, boxShadow: '0 18px 36px rgba(15,23,42,0.10)', border: '1px solid #dbeafe' }}>
            <p style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Feature {index + 1}</p>
            <h3 style={{ margin: '10px 0 6px', fontSize: 18 }}>{item.title}</h3>
            <p style={{ color: '#334155', lineHeight: 1.55, margin: 0 }}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

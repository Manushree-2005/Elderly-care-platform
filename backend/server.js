const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', healthRoutes);

const users = [
  { id: 1, role: 'Family', name: 'Asha Reddy', status: 'Active' },
  { id: 2, role: 'Patient', name: 'Ravi Sharma', status: 'Profile ready' },
  { id: 3, role: 'Admin', name: 'Nidhi Singh', status: 'Monitoring' }
];

const patients = [
  { id: 1, name: 'Ravi Sharma', age: 78, needs: 'Diabetes monitoring, mobility support' },
  { id: 2, name: 'Saraswathi Rao', age: 82, needs: 'Post-hospital recovery, physiotherapy' }
];

const services = [
  { id: 1, name: 'Nursing Care', description: 'Medication support, vitals, and daily care', price: '₹1200/day', duration: '4-8 hrs', qualification: 'GNM / B.Sc Nursing' },
  { id: 2, name: 'Elderly Attendant', description: 'Personal care and companionship support', price: '₹800/day', duration: '6-12 hrs', qualification: 'CPR certified' },
  { id: 3, name: 'Physiotherapy', description: 'Mobility and recovery sessions', price: '₹1500/session', duration: '45 mins', qualification: 'Physio therapist' },
  { id: 4, name: 'Post-Hospital Care', description: 'Home recovery and follow-up assistance', price: '₹1800/day', duration: '12 hrs', qualification: 'Home care experience' }
];

const caregivers = [
  { id: 1, name: 'Anita Sharma', specialty: 'Nursing Care', rating: 4.9, experience: '8 years', city: 'Bangalore' },
  { id: 2, name: 'Suresh Kumar', specialty: 'Physiotherapy', rating: 4.8, experience: '6 years', city: 'Hyderabad' },
  { id: 3, name: 'Meera Das', specialty: 'Elderly Attendant', rating: 4.7, experience: '5 years', city: 'Pune' }
];

const bookings = [];

const careNotes = [
  { id: 1, patient: 'Ravi Sharma', note: 'Mobility improved after physiotherapy session', updatedAt: '2026-05-29' },
  { id: 2, patient: 'Saraswathi Rao', note: 'Medication schedule is being followed on time', updatedAt: '2026-05-28' }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Elderly Care API is running' });
});

app.get('/api/users', (req, res) => res.json(users));
app.get('/api/patients', (req, res) => res.json(patients));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/caregivers', (req, res) => res.json(caregivers));
app.get('/api/bookings', (req, res) => res.json(bookings));
app.get('/api/care-notes', (req, res) => res.json(careNotes));
app.get('/api/analytics', (req, res) => {
  res.json({
    registeredUsers: 184,
    verifiedCaregivers: 36,
    bookingCompletionRate: '91%',
    avgResponseTime: '12 mins',
    satisfactionScore: '4.8/5',
    monthlyActiveUsers: 128
  });
});

app.post('/api/bookings', (req, res) => {
  const booking = {
    id: Date.now(),
    ...req.body,
    status: 'Requested'
  };
  bookings.push(booking);
  res.status(201).json({ message: 'Booking request created successfully', booking });
});

app.patch('/api/bookings/:id/status', (req, res) => {
  const booking = bookings.find(item => item.id === Number(req.params.id));
  if (!booking) return res.status(404).json({ message: 'Booking not found' });

  booking.status = req.body.status || booking.status;
  res.json({ message: 'Booking status updated', booking });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

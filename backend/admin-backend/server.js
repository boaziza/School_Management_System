const path         = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express      = require('express');
const cors         = require('cors');
const helmet       = require('helmet');
const rateLimiter  = require('./src/middlewares/rateLimiter');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(rateLimiter);
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// Auth & Users
app.use('/api/users',            require('./src/routes/users'));
app.use('/api/devices',          require('./src/routes/devices'));

// Student & Parent Management
app.use('/api/students',         require('./src/routes/students'));
app.use('/api/parents',          require('./src/routes/parents'));
app.use('/api/parent-students',  require('./src/routes/parent_students'));

// Teacher & Class Management (admin only)
app.use('/api/teachers',         require('./src/routes/teachers'));
app.use('/api/classes',          require('./src/routes/classes'));
app.use('/api/subjects',         require('./src/routes/subjects'));
app.use('/api/class-subjects',   require('./src/routes/class_subjects'));
app.use('/api/schedules',        require('./src/routes/schedules'));

// Academic Records
app.use('/api/grades',           require('./src/routes/grades'));
app.use('/api/attendance',       require('./src/routes/attendance'));

// Fee Management
app.use('/api/fee-accounts',     require('./src/routes/fee_accounts'));
app.use('/api/fee-transactions', require('./src/routes/fee_transactions'));

// Notifications
app.use('/api/notifications',    require('./src/routes/notification'));

app.get('/health', (_, res) => res.json({ ok: true, app: 'admin' }));

app.use(errorHandler);

const PORT = process.env.ADMIN_PORT || 5001;
app.listen(PORT, () => console.log(`Admin server running on port ${PORT}`));

const express = require('express');
const app = express();

const cors = require('cors');
const adminRoutes = require('./routes/AdminRoutes');
const authenticationRoutes = require('./routes/AuthenticationRoutes');

app.use(express.json());
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/auth', authenticationRoutes);

app.listen(2000);
console.log("runing server 2000");


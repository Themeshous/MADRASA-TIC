const express = require('express');
const app = express();

const cors = require('cors');

const authenticationRoutes = require('./routes/AuthenticationRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const userRoutes = require('./routes/UserRoutes');
const respAiguallageRoutes = require('./routes/RespAiguallageRoutes');
const chefservice = require('./routes/ChefServiceRoutes');

app.use(express.json());
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/auth', authenticationRoutes);
app.use('/user', userRoutes);
app.use('/declaration', respAiguallageRoutes);
app.use('/rapport', chefservice);


app.listen(2000);
console.log("runing server 2000");


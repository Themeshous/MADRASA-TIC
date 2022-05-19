const express = require('express');
const app = express();

const cors = require('cors');

const authenticationRoutes = require('./routes/AuthenticationRoutes');
const adminRoutes = require('./routes/AdminRoutes');
const userRoutes = require('./routes/UserRoutes');
const respAiguallageRoutes = require('./routes/RespAiguallageRoutes');
const chefservice = require('./routes/ChefServiceRoutes');
const Respoevent = require ('./routes/RespoEventRoutes');


app.use(express.json());
app.use(cors());

app.use('/admin', adminRoutes);
app.use('/auth', authenticationRoutes);
app.use('/user', userRoutes);
app.use('/declaration', respAiguallageRoutes);
app.use('/rapport', chefservice);
app.use('/announce',Respoevent);



app.listen(2000);
console.log("running server 2000");


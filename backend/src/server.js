const express = require('express');
const userRoutes = require('./routes/userRoutes');
const AdminController = require('./controllers/AdminController');
const authenticateMiddleware = require('./middleware/authenticate');
const app = express();

app.use(express.json());

app.use('/auth', userRoutes);
app.use('/admin', authenticateMiddleware ,AdminController);

app.listen(3000, ()=>{
    console.log('Server is running');
});
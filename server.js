const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database 
connectDB();

//Init Middleware
app.use(express.json({extended: false})); //To use "req.body" in routes.
                                          // Equal to bodyParser

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
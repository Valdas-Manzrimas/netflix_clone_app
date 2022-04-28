const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

const app = express();

app.get('/', (req, res) => res.send('API running...'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Define routes
app.use('/api/user', require('./routes/api/user')); 
// app.use('/api/profiles', require('./routes/api/profiles'))
// app.use('/api/videos', require('./routes/api/videos'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

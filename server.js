const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API running...'));

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profiles', require('./routes/api/profiles'))
app.use('/api/videos', require('./routes/api/videos'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

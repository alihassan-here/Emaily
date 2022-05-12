const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
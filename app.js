const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Halaman Utama
app.get('/', (req, res) => {
    res.render('index', { 
        nama: "School Nurul Hidayah",
        email: "cs.nurulhidayah.official@gmail.com" 
    });
});

app.listen(PORT, () => {
    console.log(`Server Aktif di http://localhost:${PORT}`);
});

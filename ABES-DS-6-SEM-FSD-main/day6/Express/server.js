const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());

const student = {
    id: 1,
    name: "dev",
    class: "B.tech"
};

app.get('/', (req, res) => {
    res.send("hi this is my first server");
});

app.get('/about', (req, res) => {
    res.send("this is the my first page");
});

// API to send student data
app.get('/student', (req, res) => {
    res.json(student);
});

app.listen(port, () => {
    console.log(`server is running at: http://localhost:${port}`);
});
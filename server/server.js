const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5000;

const number = [1, 2, 3, 4, 5];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/number", (req, res) => {
    res.json({
        data: number,
    });
});

app.get("/number/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        data: number[id],
    });
});

app.delete("/number/:id", (req, res) => {
    const id = req.params.id;

    number.splice(id, 1);

    res.json({
        message: "Number deleted successfully",
    })
});

app.post("/number", (req, res) => {
    number.push(req.body.number);
    res.status(201).json({
        message: "Number added successfully",
    });
});

app.put("/number/:id", (req, res) => {
    const id = req.params.id;
    number[id] = req.body.number;
    res.json({
        message: "Number updated successfully",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

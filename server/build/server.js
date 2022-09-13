import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Jane Doe2",
        },
        {
            id: 3,
            name: "Jane Doe3",
        },
        {
            id: 4,
            name: "Jane Doe4",
        },
        {
            id: 5,
            name: "Jane Doe5",
        }
    ]);
});
app.listen(3333);

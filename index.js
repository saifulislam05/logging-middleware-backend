import express from "express"
import loggingMiddleware from "./middlewares/loggingMiddware.js";


const app = express();

// Logger Middleware
app.use(loggingMiddleware)

app.get("/", (req, res) => {
    res.send("Wellcome");
})
app.post("/login", (req, res) => {
    for (let i = 0; i < 100000000; i++) { } // making delay to response
    res.status(200).json({
        success: true,
        message:"you are logged in"
    });
})
app.get("/products", (req, res) => {
    res.status(200).json({
        success: true,
        products: [
            {
                id: 1,
                title: "Mobile",
                price:50000,
            },
            {
                id: 2,
                title: "Laptop",
                price:700000,
            }
        ]
    });
})



app.listen(5000, () => {
    console.log("server running on 5000 port");
})
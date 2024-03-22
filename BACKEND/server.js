import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`server is created on port ${process.env.PORT}`);
})
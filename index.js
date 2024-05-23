import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//routes
import postRoute from './routes/posts.js';
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//routers declarization
app.use('/posts', postRoute); // first param is prefix for post route and sceond is the post route;

// mongoose url 
const CONNECTION_URL = 'mongodb+srv://memory_project:memory_project@cluster0.znd5coc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const PORT = process.env.PORT || 5000;

//mongo setup
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is Running on port : ${PORT}`));
    }).catch((error) => {
        console.log(error);
    });

// mongoose.set('useFindAndModify', false);
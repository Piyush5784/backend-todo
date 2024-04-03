import { PrismaClient } from "@prisma/client";
import { createUser, getTodos, getUsersAndTodos } from "./Function.js";
import { createTodos } from "./Function.js";

const bodyparser = require("body-parser");

const cors = require("cors");

const prisma = new PrismaClient();

const express = require("express");

const app = express();

const port = 3002;

app.use(bodyparser.json());

app.use(cors());

app.post("/createUser", async (req: any, res: any) => {

    const
        { username, password, firstname, lastname }
            : { username: string, password: string, firstname: string, lastname: string } =
            req.body;

    const message: string = await createUser(username, password, firstname, lastname);
    res.json({
        message
    });
})

app.get("/", (req: any, res: any) => res.send("OK"))

app.post("/createTodos", async (req: any, res: any) => {
    const
        { username, password, title, description }:
            { username: string, password: string, title: string, description: string }
            = req.body;

    const user: any = await prisma.user.findUnique({
        where: {
            username,
            password
        }
    })

    const message: String = await createTodos(user.id, title, description);

    res.json({
        message
    });
})



app.get("/getTodos", async (req: any, res: any) => {

    const
        { username, password }
            : { username: string, password: string } =
            req.body;

    const user: any = await prisma.user.findUnique({
        where: {
            username,
            password
        }
    })
    const todos: Object = await getTodos(user.id);

    res.json({
        message: "Success",
        todos
    });
})

app.get("/getUserAndTodos", async (req: any, res: any) => {
    const
        { username, password }
            : { username: string, password: string } =
            req.body;

    const user: any = await prisma.user.findUnique({
        where: {
            username,
            password
        }
    })

    const todos: Object = getUsersAndTodos(user.id);
    res.json({
        message: "Success",
        todos
    });
})


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('error', (error: Error) => {
    console.error('Server error:');
});
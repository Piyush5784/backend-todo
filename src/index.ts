import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    })
    console.log(res)
}

async function getTodos(userId: number) {
    const res = await prisma.todos.findMany({
        where: {
            userId
        }
    })
    console.log(res);
}

async function getUsersAndTodos(userId: number) {
    const res = await prisma.todos.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            description: true,
            title: true,
            done: true,
            User: true
        }
    })
    console.log(res);
}

async function createTodo(userId: number) {
    const res = await prisma.todos.create({
        data: {
            title: "test1",
            description: "this is a todo",
            userId
        }
    })

    console.log(res);
}

// insertUser('test', 'test', 'test', 'test').then(() => console.log("Query performed"))

getTodos(1);

// getUsersAndTodos(1);

// createTodo(1);

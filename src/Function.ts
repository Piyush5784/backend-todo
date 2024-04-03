import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(username: string, password: string, firstname: string, lastname: string) {
    await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    })

    return "user created successful";
}


export async function createTodos(userId: number, title: string, description: string) {
    await prisma.todos.create({
        data: {
            title,
            description,
            userId
        }
    })
    return "todo created successfull"
}

export async function getTodos(userId: number) {
    const res = await prisma.todos.findMany({
        where: {
            userId
        }
    })
    return res;
}


export async function getUsersAndTodos(userId: number) {
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

    return res;
}

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

interface UpdateUserInput {
    id: number;
    name?: string;
    email?: string;
    password?: string;
}

interface UserRepository {
    getUsers(): User[];
    getUserById(id: number): User | undefined;
    createUser(user: CreateUserInput): User;
    updateUser(user: UpdateUserInput): User | undefined;
    deleteUser(id: number): boolean;
}

export { User, CreateUserInput, UpdateUserInput, UserRepository };
let todos = [];
let nextId = 1;  // Biến lưu trữ ID tiếp theo sẽ được gán

class Todo {
    constructor(title, description = '') {
        this.id = nextId++;  // Gán ID hiện tại và tăng biến nextId lên 1
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
    }

    static getAll() {
        return todos;
    }

    static getById(id) {
        // Chuyển đổi id từ string sang number vì params từ URL thường là string
        return todos.find(todo => todo.id === parseInt(id));
    }

    static create(data) {
        const newTodo = new Todo(data.title, data.description);
        todos.push(newTodo);
        return newTodo;
    }

    static update(id, data) {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
        if (todoIndex === -1) return null;

        // Cập nhật tất cả trường ngoại trừ id (giữ nguyên id)
        const updatedTodo = {
            ...todos[todoIndex],
            ...data,
            id: parseInt(id)  // Đảm bảo ID không bị thay đổi
        };
        todos[todoIndex] = updatedTodo;
        return updatedTodo;
    }

    static delete(id) {
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
        if (todoIndex === -1) return false;

        todos.splice(todoIndex, 1);
        return true;
    }
}

module.exports = Todo;
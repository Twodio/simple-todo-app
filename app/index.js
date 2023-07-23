import { authController , todoController} from "./controllers/index.js";

const todo = {
    title: 'another', 
    description: 'one'
}

console.log(JSON.stringify(todo));
todoController.create(todo);
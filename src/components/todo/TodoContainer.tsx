import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {

    const { todos } = useAppSelector(state => state.todos)

    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-blue-200 w-full h-[500px] rounded-xl p-5 space-y-3">
                {
                    todos.map(item => (
                        <TodoCard id={item.id} title={item.title} description={item.description} />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoContainer;
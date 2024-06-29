import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-blue-200 w-full h-[500px] rounded-xl p-5 space-y-3">
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};

export default TodoContainer;
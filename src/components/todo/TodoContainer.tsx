import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/Api";

const TodoContainer = () => {

    // const { todos } = useAppSelector(state => state.todos)
    const [priority, setPriority] = useState('');
    const { data: todos, isLoading } = useGetTodosQuery(priority);

    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter priority={priority} setPriority={setPriority} />
            </div>
            <div className="bg-blue-200 w-full h-[500px] rounded-xl p-5 space-y-3">
                {
                    todos?.data?.map((item: { id: string; title: string; description: string; isCompleted: boolean, priority: string }) => (
                        <TodoCard
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            isCompleted={item.isCompleted}
                            priority={item.priority}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoContainer;
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";

type TTodoCardProps = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    priority: string
}

const TodoCard = ({ id, title, description, isCompleted, priority }: TTodoCardProps) => {
    const dispatch = useDispatch();

    const toggleState = () => {
        dispatch(toggleComplete(id))
    }

    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input
                onChange={toggleState}
                type="checkbox"
                name=""
                id=""
            />
            <div className=" flex items-center gap-2">
                <div
                    className={
                        `
                    size-3 rounded-full
                    ${priority === 'high' ? 'bg-red-500' : null}
                    ${priority === 'medium' ? 'bg-yellow-500' : null}
                    ${priority === 'low' ? 'bg-green-500' : null}
                    `
                    }
                >
                </div>
                <p>{priority}</p>
            </div>
            <div>
                {
                    isCompleted ?
                        <p className="text-green-500">Done</p> :
                        <p className="text-red-600">Pending</p>
                }
            </div>
            <p className="font-semibold">
                {title}
            </p>
            <p>Time</p>
            <p>{description}</p>
            <div className="space-x-5">
                <button onClick={() => dispatch(removeTodo(id))} className="text-white bg-red-500 px-2 py-1 rounded">Delete</button>
                <button className="text-white bg-[#5C53FE]  px-2 py-1  rounded">Edit</button>
            </div>
        </div>
    );
};

export default TodoCard;
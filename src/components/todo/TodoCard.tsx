import { removeTodo } from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";

type TTodoCardProps = {
    id: string;
    title: string;
    description: string;
}

const TodoCard = ({ id, title, description }: TTodoCardProps) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input
                type="checkbox"
                name=""
                id=""
            />
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
const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input
                type="checkbox"
                name=""
                id=""
            />
            <p className="font-semibold">
                Todo Title
            </p>
            <p>Time</p>
            <p>Des</p>
            <div className="space-x-5">
                <button className="text-white bg-red-500 px-2 py-1 rounded">Delete</button>
                <button className="text-white bg-[#5C53FE]  px-2 py-1  rounded">Edit</button>
            </div>
        </div>
    );
};

export default TodoCard;
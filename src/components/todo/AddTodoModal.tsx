import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const onsubmit = (e: FormEvent) => {
        e.preventDefault();
        const randomNumber = Math.random().toString(36).substring(2, 8);
        const taskDetails = {
            id: randomNumber,
            title: task,
            description,
            priority: 'high'
        }
        dispatch(addTodo(taskDetails));
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="outline">
                    Add todo
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add task</DialogTitle>
                    <DialogDescription>
                        Add your tasks that you want to finish.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onsubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input
                                onBlur={(e) => setTask(e.target.value)}
                                id="task"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                onBlur={(e) => setDescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;
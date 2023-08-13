import { useEffect } from "react";

import { getAllTodos } from "../redux/actions";

import { useDispatch, useSelector } from "react-redux";
import Task from "../components/Task";
import { useNavigate } from "react-router-dom";
import { ArticleWrapper, CreateButton, FormHeader, FormTitle } from "../StyledComponent";

const ListTasks = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch])

    return (
        <ArticleWrapper>
            <FormHeader>
                <FormTitle>Tasks List</FormTitle>
            </FormHeader>
            <CreateButton
                className="create-button"
                onClick={() => navigate('/create-task')}>Create New Task</CreateButton>


            <ul>
                {
                    todos.map(todo => (
                        <Task
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </ArticleWrapper>

    )
}

export default ListTasks;
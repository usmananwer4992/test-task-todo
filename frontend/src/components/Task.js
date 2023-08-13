import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskItem, TaskText } from "../StyledComponent";

const Task = ( { todo }) => {

  const dispatch = useDispatch();
    return (
        <TaskItem
          className="task"
        >
          <TaskText>
            {todo.data}
          </TaskText>
          <span className="delete">
            <DeleteIcon onClick={() => dispatch(deleteTodo(todo._id))} />
          </span>
        </TaskItem>
    )
}

export default Task;
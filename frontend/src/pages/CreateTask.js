import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { 
  FormWrapper,
  FormHeader,
  FormTitle,
  FormInput,
  AddButton,
  GoToAllButton,
  SuccessAlert,
} from "../StyledComponent";

const CreateTask = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <FormWrapper className="form" onSubmit={onFormSubmit}>
                <FormHeader>
                    <FormTitle>Create New Task</FormTitle>
                </FormHeader>
                <FormInput 
                    placeholder="Enter new Task" 
                    className="input"
                    value={text}
                    onChange={onInputChange}
                />
                <AddButton className="add-new" type="submit">Add Task</AddButton>
                {showAlert && (
                <SuccessAlert className="success-alert">
                    Task added successfully!
                </SuccessAlert>
            )}
            </FormWrapper>
            <GoToAllButton className="all-tasks" onClick={() => navigate('/list-tasks')}>Go to All Tasks</GoToAllButton>
            
        </>
    )
}

export default CreateTask;
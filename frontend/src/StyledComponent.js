import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.header`
  text-align: center;

  h1 {
    font-size: 70px;
    color: #2c3e50;
    font-weight: 200;
  }
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  font-weight: 200;
`;

export const FormInput = styled.input`
padding: 10px;
margin: 5px 0;
width: 99%;
border-bottom: 1px solid #2c3e50;
border-radius: 5px;
`;

export const AddButton = styled.button`
  background-color: #34495e;
  padding: 15px;
  margin-top: 30px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
`;

export const GoToAllButton = styled.button`
  background-color: #fff;
  padding: 15px;
  margin-top: 30px;
  width: 100%;
  border: 1px solid #34495e;
  border-radius: 5px;
  cursor: pointer;
  color: #34495e;

  &:hover {
    background-color: #34495e;
    color: #fff;
  }
}`

export const SuccessAlert = styled.div`
position: fixed;
top: 20px;
right: 20px;
background-color: #4caf50;
color: white;
padding: 15px 35px;
border-radius: 5px;
z-index: 999;
`;

export const ArticleWrapper = styled.article`
  display: grid;
`;

export const CreateButton = styled.button`
  background-color: #34495e;
  padding: 15px;
  margin: 5px;
  margin-left: 43px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
`

export const TaskItem = styled.li`
  background-color: #ccd8e4;
  padding: 15px;
  margin: 5px;
  overflow-x: hidden;
  border: none;
  outline: none;
  border-left: 5px solid #2c3e50;
  border-radius: 5px;
  cursor: pointer;
`;

export const TaskText = styled.span`
  color: #34495e;
`;
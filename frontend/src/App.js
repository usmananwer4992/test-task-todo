import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ListTasks from './pages/ListTasks';
import CreateTask from './pages/CreateTask';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element= {<ListTasks />} />
          <Route path='/list-tasks' element= {<ListTasks />} />
          <Route path='/create-task' element= {<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

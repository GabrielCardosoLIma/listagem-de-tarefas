import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import taskDetails from "./components/TaskDetails";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    // {
    //   id: "1",
    //   title: "Estudar Programação",
    //   completed: false,
    // },
    // {
    //   id: "2",
    //   title: "Ler livros",
    //   completed: true,
    // },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
        )
        setTasks(data);
    }
    fetchTasks();
}, []);


  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="Container">
        <div>
          <h1>Minhas Tarefas</h1>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={taskDetails}/>
      </div>
    </Router>
  );
}

export default App;

import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../../Services/api";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const [tokenTask, setTokenTask] = useState(
    JSON.parse(localStorage.getItem("@bump:token")) || ""
  );
  const [myInfoInTask, setMyInfoInTask] = useState(
    JSON.parse(localStorage.getItem("@bump:myInfo")) || ""
  );

  const [groupId, setGroupId] = useState(
    JSON.parse(localStorage.getItem("@bump:groupid")) || ""
  );
  const [subTasks, setSubTasks] = useState([]);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    if (tokenTask && groupId) {
      api
        .get(`group/${groupId}?_embed=task`, {
          headers: {
            Authorization: `Bearer ${tokenTask}`,
          },
        })
        .then((response) => {
          setTasks(response.data.task);
        });
    }
  }, [tokenTask, groupId]);

  useEffect(() => {
    if (tokenTask && taskId) {
      api
        .get(`task/${taskId}?_embed=subtask`, {
          headers: {
            Authorization: `Bearer ${tokenTask}`,
          },
        })
        .then((response) => {
          console.log(response.data.subtask);
          setSubTasks(response.data.subtask);
        });
    }
  }, [tokenTask, taskId]);

  const addTask = (id, data) => {
    const groupId = Number(id);
    const status = "andamento";
    const finalData = { ...data, groupId, status };
    api
      .post(`task`, finalData, {
        headers: {
          Authorization: `Bearer ${tokenTask}`,
        },
      })
      .then((response) => setTasks([...tasks, response.data]));
  };

  const removeTask = (id) => {
    api
      .delete(`task/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenTask}`,
        },
      })
      .then((response) => setTasks(tasks.filter((tk) => tk.id !== id)))
      .catch((err) => console.log(err));
  };

  const addSubTask = (id, data) => {
    const taskId = Number(id);
    const status = "andamento";
    const membro = [{ ...myInfoInTask }];
    const finalData = { ...data, taskId, status, membro };
    api
      .post(`subtask`, finalData, {
        headers: {
          Authorization: `Bearer ${tokenTask}`,
        },
      })
      .then((response) => setSubTasks([...subTasks, response.data]));
  };

  const removeSubTask = (id) => {
    api
      .delete(`subtask/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenTask}`,
        },
      })
      .then((response) =>
        setSubTasks(subTasks.filter((subtk) => subtk.id != id))
      )
      .catch((err) => console.log(err));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        taskId,
        subTasks,
        addTask,
        removeTask,
        groupId,
        setGroupId,
        setTokenTask,
        setMyInfoInTask,
        setTaskId,
        addSubTask,
        removeSubTask,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const baseUrl = "http://localhost:8080/api/tasks";

export const getTasks = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

export const addTask = async (task) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });
  return response.json();
};

export const updateTask = async (task) => {
  const response = await fetch(`${baseUrl}/${task._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  });
};

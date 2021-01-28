export const loadTodos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "List One",
          list: [
            {
              id: 1,
              task: "task one"
            }
          ],
          task: ""
        },
        {
          name: "List Two",
          list: [
            {
              id: 1,
              finished: true,
              task: "task one"
            }
          ],
          task: ""
        }
      ]);
    }, 1000);
  });
};

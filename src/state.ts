export default {
  epics: [
    {
      id: "1",
      content: "test epic",
      stories: [
        {
          id: "1",
          content: "test story for test epic",
          tasks: [
            {
              id: "1",
              content: "test task",
              taskGroupId: "1"
            },
            {
              id: "2",
              content: "test task 2",
              taskGroupId: "2"
            }
          ]
        },

        {
          id: "2",
          content: "test story 2 for test epic",
          tasks: [
            {
              id: "3",
              content: "test task 3",
              taskGroupId: "1"
            }
          ]
        }
      ]
    }
  ],
  taskGroups: [
    {
      id: "1",
      name: "first task group"
    },
    {
      id: "2",
      name: "second task group"
    }
  ]
};

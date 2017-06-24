export default {
  groups: [
    {
      id: 1,
      name: 'Release 1'
    }
  ],

  goals: [
    {
      id: 1,
      title: 'Goal 1',
      stories: [
        {
          id: 1,
          content: 'StoryCard 1',
          details: [
            {
              id: 1,
              content: 'Detail 1',
              groupId: 1
            }
          ]
        },
        {
          id: 2,
          content: 'StoryCard 2'
        },
        {
          id: 3,
          content: 'StoryCard 3'
        }
      ]
    },
    {
      id: 2,
      title: 'Goal 2',
      stories: [
        {
          id: 4,
          content: 'StoryCard 4'
        }
      ]
    },
    {
      id: 3,
      title: 'Goal 3'
    }
  ],
};
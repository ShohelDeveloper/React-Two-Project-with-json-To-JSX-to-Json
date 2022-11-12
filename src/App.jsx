import React from 'react';

const task = [
  {
    id: 'unique_id_001',
    subtitle: 'Subtitle',
    createdAt: '2022-11-10T15:36:21.319Z',
    tags: [
      {
        id: 'tag-001',
        text: 'Its done',
        icon: 'T'
      },
      {
        id: 'tag-002',
        text: 'Its Cancelled',
        icon: 'P'
      },
      {
        id: 'tag-003',
        text: 'Its in Progress',
        icon: 'P'
      },
      {
        id: 'tag-004',
        text: 'Just Wrote IT',
        icon: 'C'
      }
    ],
    comments: [
      {
        id: 'comment-id-001',
        user: {
          avatar: 'xyz.com',
          name: 'Shohel',
          id: 'user-id-001'
        },
        text: 'hi my name shohel rana|! i am agood boy. i am a full stack web developer with mern stack developer. i have a so big dream. allah please full fill my dream perfectly. love you allah'
      }
    ],

    tasks: [
      {
        id: 'task-001',
        title: 'Foggy Neison',
        text: 'Here to clean the streets of Hells kitchen',
        status: 'done'
      },
      {
        id: 'task-002',
        title: 'Louis CK',
        text: 'Here to clean the streets of Hells kitchen',
        status: 'cancelled'
      },
      {
        id: 'task-003',
        title: 'Alvert Einestein',
        text: 'Here to clean the streets of Hells kitchen',
        status: 'progress'
      },
      {
        id: 'task-004',
        title: 'Foggy Neison',
        text: 'Here to clean the st reets of Hells kitchen',
        status: 'progress'
      },
    ],
  },
  {
    id: 'unique_id_001',
    subtitle: 'Subtitle',
    createdAt: '2022-11-10T15:36:21.319Z',
    tags: [
      {
        id: 'tag-004',
        text: 'Just Wrote IT',
        icon: 'C'
      }
    ],
    comments: [
      {
        id: 'comment-id-001',
        user: {
          avatar: 'xyz.com',
          name: 'Shohel',
          id: 'user-id-001'
        },
        text: 'hi my name shohel rana|! i am agood boy. i am a full stack web developer with mern stack developer. i have a so big dream. allah please full fill my dream perfectly. love you allah',
        
      },
      {
        id: 'comment-id-001',
        user: {
          avatar: 'xyz.com',
          name: 'Shohel',
          id: 'user-id-001'
        },
        text: 'hi my name shohel rana|! i am agood boy. i am a full stack web developer with mern stack developer. i have a so big dream. allah please full fill my dream perfectly. love you allah',
        
      }
    ],

    tasks: [
      {
        id: 'task-003',
        title: 'Alvert Einestein',
        text: 'Here to clean the streets of Hells kitchen',
        status: 'progress'
      },
      {
        id: 'task-004',
        title: 'Foggy Neison',
        text: 'Here to clean the st reets of Hells kitchen',
        status: 'progress'
      },
    ],
  }
]

// For Day
function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = ["Sunday", "Monday","Tuesday","Wednesday","Thirsday","Friday"]
  return days[date]
}
// console.log(getDay(task.createdAt))

// For Date
function formatDate(datestr) {
  const date = new Date(datestr)
  return `${date.getDate()} - ${date.getMonth() } - ${date.getFullYear()}`
}
// console.log(formatDate(task.createdAt))

// now we need component:

const TagListItem = ({tag}) => {
  return (  <li key={tag.id}>
  <small>{ tag.icon}</small> - {tag.text} 
  </li>
  )
}

const CommentListItem = ({ comment}) => {
 return (
    <div key={comment.id}>
      <h3>{ comment.user.name}</h3>
      <h3>{ comment.text}</h3>

    </div>
  )
}

const TaskListItem = ({task}) => {
  return (
    <li key={task.id}>
      <h3>{task.title}</h3>
      <p> <small>{task.status}</small></p>
      <p>{ task.text}</p>
    </li>
  )
}


// main component 

const TaskCarD = ({task}) => {
  return (
    <div>
      <h1>{getDay(task.createdAt)}, {formatDate(task.createdAt)}</h1>
      <h3>{task.subtitle} </h3>
      <ul>
        {task.tags.map((tag) => <TagListItem tag={tag} key={ tag.id} />)}
      </ul>
      <hr />
      <p>Notes Linked to people</p>
    
      <div>
        {task.comments.map((comment) => <CommentListItem comment={ comment} key={comment.id} /> )}
      </div>

      <div> 
        {task.tasks.map((task) => <TaskListItem task={task} key={task.id} />)}
      </div>
    </div>
    
  );
}

function App() {
  return (
  
    <div>
      {task.map((task) => (<TaskCarD key = {task.id} task={task} />))}
    </div>
    
  );
}

export default App;

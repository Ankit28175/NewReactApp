
    const Admin = [{
      "id": 1,
      "name": "Admin ",
      "email": "admin@example.com",
      "password": "123"
    }]
    const Employee = [
      {
        "id": 2,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "123",
        "taskCount": {
          "newTask": 2,
          "failedTask": 1,
          "activeTask": 2,
          "completedTask": 1},
        "tasks": [
          {
            "task_number": 1,
            "task_name": "Project Planning",
            "task_date": "2025-04-05",
            "newTasks": true,
            "failedTasks": true,
            "activeTaskss": true,
            "completedTasks": true,
            "task_description": "Planning phase of the new project.",
            "task_category": "Project Management",
            "task_status_number": 1 // Active = 1
          },
          {
            "task_number": 2,
            "task_name": "Code Review",
            "task_date": "2025-04-06",
            "newTasks": true,
            "failedTasks": true,
            "activeTasks": true,
            "completedTasks": true,
           
            "task_description": "Reviewing code from the latest sprint.",
            "task_category": "Development",
            "task_status_number": 2 // Completed = 2
          }
        ]
      },
      {
        "id": 3,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "123",
        "taskCount": {
          "newTask": 1,
          "failedTask": 0,
          "activeTask": 2,
           "completedTask": 1},
        "tasks": [
          {
            "task_number": 1,
            "task_name": "Design Mockups",
            "task_date": "2025-04-07",
            "newTasks": true,
            "failedTasks": false,
            "activeTasks": true,
            "completedTasks": true,
            "task_description": "Creating mockups for the new website.",
            "task_category": "Design",
            "task_status_number": 1 // Active = 1
          }
        ]
      },
      {
        "id": 4,
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "password": "123",
        "taskCount": {
          "newTask": 2,
          "failedTask": 0,
          "activeTask": 0,
           "completedTask": 3},
        "tasks": [
          {
            "task_number": 1,
            "task_name": "Database Migration",
            "task_date": "2025-04-08",
            "newTasks": true,
            "failedTasks": false,
            "activeTasks": false,
            "completedTasks": true,
            "task_description": "Migrating database to the new server.",
            "task_category": "Database Management",
            "task_status_number": 1 // Active = 1
          },
          {
            "task_number": 2,
            "task_name": "Backend API Development",
            "task_date": "2025-04-09",
            "newTasks": true,
            "failedTasks": false,
            "activeTasks": false,
            "completedTasks": true,
            "task_description": "Developing new API endpoints for the app.",
            "task_category": "Development",
            "task_status_number": 2 // Completed = 2
          }
        ]
      },
      {
        "id": 5,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "password": "123",
        "taskCount": {
          "newTask": 0,
          "failedTask": 1,
          "activeTask": 2,
           "completedTask": 2},
        "tasks": [
          {
            "task_number": 1,
            "task_name": "User Testing",
            "task_date": "2025-04-10",
            "newTasks": true,
            "failedTasks": true,
            "activeTasks": true,
            "completedTasks": true,
            "task_description": "Testing new features of the app with users.",
            "task_category": "QA",
            "task_status_number": 1 // Active = 1
          },
          {
            "task_number": 2,
            "task_name": "Bug Fixing",
            "task_date": "2025-04-11",
            "newTasks": true,
            "failedTasks": true,
            "activeTasks": true,
            "completedTasks": true,
            "task_description": "Fixing bugs reported during testing.",
            "task_category": "QA",
            "task_status_number": 1 // Active = 1
          }
        ]
      },
      {
        "id": 6,
        "name": "David Wilson",
        "email": "david.wilson@example.com",
        "password": "123",
        "taskCount": {
          "newTask": 1,
          "failedTask": 0,
          "activeTask": 2,
           "completedTask": 3
          },
        "tasks": [
          {
            "task_number": 1,
            "task_name": "SEO Optimization",
            "task_date": "2025-04-12",
            "newTasks": true,
            "failedTasks": false,
            "activeTasks": true,
            "completedTasks": true,
            "task_description": "Optimizing website for search engines.",
            "task_category": "Marketing",
            "task_status_number": 1 // Active = 1
          }
        ]
      }
    ];
    
  
    export function setLocaleStorage() {
        localStorage.setItem('employees',JSON.stringify(Employee))
        localStorage.setItem('admin',JSON.stringify(Admin))
    }
    export function getLocaleStorage() {
       const employee = JSON.parse(localStorage.getItem('employees'))
       const admin = JSON.parse(localStorage.getItem('admin'))
       return{ employee,admin }
       
    }
    
    
  
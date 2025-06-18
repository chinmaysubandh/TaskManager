const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Update Website",
                description: "Revamp the landing page layout and design.",
                date: "2025-06-18",
                category: "Development"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Login Bug",
                description: "Resolve issue where users can't log in using Safari.",
                date: "2025-06-16",
                category: "Bug Fix"
            },
            {
                status: true,
                newTask: false,
                completed: false,
                failed: true,
                title: "Prepare Report",
                description: "Draft the quarterly performance report.",
                date: "2025-06-17",
                category: "Reporting"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Write Blog Post",
                description: "Write a blog about recent tech trends.",
                date: "2025-06-18",
                category: "Content"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Create Logo",
                description: "Design a logo for the new app.",
                date: "2025-06-15",
                category: "Design"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Database Backup",
                description: "Backup the entire employee database.",
                date: "2025-06-14",
                category: "Database"
            },
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Client Meeting",
                description: "Attend meeting with prospective clients.",
                date: "2025-06-19",
                category: "Meetings"
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                status: true,
                newTask: false,
                completed: false,
                failed: true,
                title: "Optimize Images",
                description: "Compress all website images for faster load time.",
                date: "2025-06-17",
                category: "Performance"
            },
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Deploy App",
                description: "Deploy the latest build to the production server.",
                date: "2025-06-18",
                category: "Deployment"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Write Test Cases",
                description: "Write unit tests for the new modules.",
                date: "2025-06-13",
                category: "Testing"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Security Audit",
                description: "Perform audit for web app security.",
                date: "2025-06-10",
                category: "Security"
            },
            {
                status: true,
                newTask: false,
                completed: false,
                failed: true,
                title: "Mobile Optimization",
                description: "Ensure the site is responsive on mobile devices.",
                date: "2025-06-11",
                category: "Design"
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "SEO Analysis",
                description: "Analyze SEO for all blog pages.",
                date: "2025-06-18",
                category: "Marketing"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Internal Survey",
                description: "Conduct survey for internal team feedback.",
                date: "2025-06-12",
                category: "HR"
            },
            {
                status: true,
                newTask: false,
                completed: false,
                failed: true,
                title: "Campaign Setup",
                description: "Setup Google Ads campaign.",
                date: "2025-06-10",
                category: "Marketing"
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Conduct Interview",
                description: "Interview candidate for frontend developer role.",
                date: "2025-06-18",
                category: "HR"
            },
            {
                status: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Performance Review",
                description: "Review performance of team members.",
                date: "2025-06-14",
                category: "Management"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Budget Planning",
                description: "Create budget plan for next quarter.",
                date: "2025-06-13",
                category: "Finance"
            },
            {
                status: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Feedback Analysis",
                description: "Analyze customer feedback for improvement.",
                date: "2025-06-18",
                category: "Support"
            }
        ]
    }
];

const admin = [
    {
        id: 100,
        email: "admin@example.com",
        password: "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
   const empData= localStorage.getItem('employess');
   const adData= localStorage.getItem('admin');
    return JSON.parse(empData), JSON.parse(adData);
    

}
  
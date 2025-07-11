const employees = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        password: "123",
        taskcounts: { // Existing taskcounts for employee 1
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 2
        },
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
        name: "Priya Singh",
        email: "employee2@example.com",
        password: "123",
        taskcounts: { // Added taskcounts for employee 2
            "active": 2, // e.g., "Write Blog Post", "Client Meeting"
            "newTask": 2, // e.g., "Write Blog Post", "Client Meeting"
            "completed": 2, // e.g., "Create Logo"
            "failed": 1 // e.g., "Database Backup"
        },
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
            },
            // 🔻 5 Additional Failed Tasks
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Email Newsletter",
                description: "Create and send the monthly newsletter.",
                date: "2025-06-13",
                category: "Marketing"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Update Privacy Policy",
                description: "Revise the company's privacy policy document.",
                date: "2025-06-12",
                category: "Legal"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Team Onboarding",
                description: "Prepare onboarding materials for new hires.",
                date: "2025-06-11",
                category: "HR"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Internal Audit",
                description: "Conduct an internal audit of all departments.",
                date: "2025-06-10",
                category: "Audit"
            },
            {
                status: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "System Upgrade",
                description: "Upgrade all systems to the latest OS version.",
                date: "2025-06-09",
                category: "IT"
            }
        ]
    },
    {
        id: 3,
        name: "Amit Patel",
        email: "employee3@example.com",
        password: "123",
        taskcounts: { // Added taskcounts for employee 3
            "active": 3, // e.g., "Optimize Images", "Deploy App", "Mobile Optimization"
            "newTask": 1, // e.g., "Deploy App"
            "completed": 2, // e.g., "Write Test Cases", "Security Audit"
            "failed": 2 // e.g., "Optimize Images", "Mobile Optimization"
        },
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
        name: "Sneha Devi",
        email: "employee4@example.com",
        password: "123",
        taskcounts: { // Added taskcounts for employee 4
            "active": 2, // e.g., "SEO Analysis", "Campaign Setup"
            "newTask": 1, // e.g., "SEO Analysis"
            "completed": 1, // e.g., "Internal Survey"
            "failed": 1 // e.g., "Campaign Setup"
        },
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
        name: "Vikram Kumar",
        email: "employee5@example.com",
        password: "123",
        taskcounts: { // Added taskcounts for employee 5
            "active": 2, // e.g., "Conduct Interview", "Feedback Analysis"
            "newTask": 2, // e.g., "Conduct Interview", "Feedback Analysis"
            "completed": 1, // e.g., "Performance Review"
            "failed": 1 // e.g., "Budget Planning"
        },
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
        name: "Admin Chinmay",
        email: "admin@example.com",
        password: "123"
    },
    {
        id: 101,
        name: "Chinmay Joshi",
        email: "adminchinmay@gmail.com",
        password: "123456"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };

}
import React from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const AdminDashboard: React.FC = () => {
    const userActivityData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Active Users',
                data: [50, 75, 100, 125, 150, 200],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
        ],
    };

    const taskStatusData = {
        labels: ['Completed', 'Pending', 'In Progress'],
        datasets: [
            {
                data: [70, 20, 10],
                backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
            },
        ],
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">User Activity Trends</h3>
                    <div style={{height: 200, width: '100%'}}>
                        <Bar data={userActivityData} />
                    </div>
                </div>

                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Task Status</h3>
                    <div style={{height: 200, width: '100%'}}>
                        <Doughnut data={taskStatusData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

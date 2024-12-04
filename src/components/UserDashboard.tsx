import React from 'react';
import {Line, Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const UserDashboard: React.FC = () => {
    const weeklyActivityData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Tasks Completed',
                data: [2, 3, 1, 4, 5, 3, 2],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const taskBreakdownData = {
        labels: ['Completed', 'Pending'],
        datasets: [
            {
                data: [12, 3],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Weekly Activity</h3>
                    <div style={{height: 200, width: '100%'}}>
                        <Line data={weeklyActivityData} />
                    </div>
                </div>

                <div className="p-4 bg-white rounded shadow">
                    <h3 className="text-xl font-semibold mb-4">Task Breakdown</h3>
                    <div style={{height: 200, width: '100%'}}>
                        <Pie data={taskBreakdownData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;

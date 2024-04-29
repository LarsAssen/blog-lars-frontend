import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}
export default Dashboard;
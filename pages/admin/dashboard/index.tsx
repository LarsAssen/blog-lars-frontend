import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminPostList from '@/components/posts/postLists/adminPostList';

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
            <AdminPostList />
        </div>
    );
}
export default Dashboard;
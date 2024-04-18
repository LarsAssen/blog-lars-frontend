import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link href="/admin/posts">Manage Posts</Link></li>
        <li><Link href="/admin/posts/new">Create New Post</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
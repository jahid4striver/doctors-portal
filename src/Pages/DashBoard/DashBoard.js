import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user]= useAuthState(auth)
    const [admin]= useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl my-4 text-secondary text-center uppercase'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                        <li><Link to='/dashboard/reviews'>My History</Link></li>
                       {
                           admin &&  <li><Link to='/dashboard/users'>All Users</Link></li>
                       }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;
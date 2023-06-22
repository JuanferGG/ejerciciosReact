import React from 'react';
import { Navigate } from 'react-router-dom'

export const Index = () => <h2>Landing Page ejemplo (public)</h2>
export const Home = () => {
    return  <h2>Home Page (Private)</h2>
}
export const Dashboard = () => <h2>DashBorad Page (Private)</h2>
export const Analytics = () => <h2>Analytics Page (Private & permission: 'analize')</h2>
export const Admin = () => <h2>Admin Page (Private & permission: 'admin')</h2>

import React from 'react';

const AdminDashboard = () => {
    const stats = {
        activeVehicles: 120,
        totalRevenue: 50000,
        totalRegisteredVehicles: 350,
    };

    const [tariffs, setTariffs] = React.useState({ hourlyRate: 10, dailyRate: 70 });

    const handleTariffChange = (e) => {
        const { name, value } = e.target;
        setTariffs(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="stats">
                <div className="stat-card">
                    <h2>Active Vehicles</h2>
                    <p>{stats.activeVehicles}</p>
                </div>
                <div className="stat-card">
                    <h2>Total Revenue</h2>
                    <p>${stats.totalRevenue}</p>
                </div>
                <div className="stat-card">
                    <h2>Total Registered Vehicles</h2>
                    <p>{stats.totalRegisteredVehicles}</p>
                </div>
            </div>
            <div className="tariff-config">
                <h2>Configure Parking Tariffs</h2>
                <label>
                    Hourly Rate:
                    <input type="number" name="hourlyRate" value={tariffs.hourlyRate} onChange={handleTariffChange} />
                </label>
                <label>
                    Daily Rate:
                    <input type="number" name="dailyRate" value={tariffs.dailyRate} onChange={handleTariffChange} />
                </label>
            </div>
        </div>
    );
};

export default AdminDashboard;
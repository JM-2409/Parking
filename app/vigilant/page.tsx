import React, { useEffect, useState } from 'react';

const VigilantDashboard = () => {
    const [block, setBlock] = useState('');
    const [house, setHouse] = useState('');
    const [plate, setPlate] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [activeVehicles, setActiveVehicles] = useState([]);

    const handleSearch = async () => {
        // Load vehicle data by plate number from an API or data source
        // Example: const data = await fetchDataByPlate(plate);
        // setActiveVehicles(data);
    };

    const handleRemove = (plateToRemove) => {
        // Implement the logic to remove vehicle from the system
        setActiveVehicles(activeVehicles.filter(v => v.plate !== plateToRemove));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, handle the logic to add the vehicle to the system
        const newVehicle = { block, house, plate, phone, name };
        setActiveVehicles([...activeVehicles, newVehicle]);
        setBlock('');
        setHouse('');
        setPlate('');
        setPhone('');
        setName('');
    };

    useEffect(() => {
        if (plate) { // Trigger search when plate is entered
            handleSearch();
        }
    }, [plate]);

    return (
        <div>
            <h1>Vigilant Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Block' value={block} onChange={(e) => setBlock(e.target.value)} />
                <input type='text' placeholder='House' value={house} onChange={(e) => setHouse(e.target.value)} />
                <input type='text' placeholder='Plate' value={plate} onChange={(e) => setPlate(e.target.value)} />
                <input type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Add Vehicle</button>
            </form>
            <h2>Active Vehicles</h2>
            <ul>
                {activeVehicles.map((vehicle, index) => (
                    <li key={index}>
                        {vehicle.plate} - {vehicle.name} 
                        <button onClick={() => handleRemove(vehicle.plate)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VigilantDashboard;
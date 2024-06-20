import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/menu');
            setMenuItems(data);
        };

        fetchData();
    }, []);

    return (
        <div>
        <h1 className="text-4xl font-bold mb-4">Menu</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id} className="mb-4">
                        <h2 className="text-2xl">{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <img src={item.image_url} alt={item.name} className=""/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;

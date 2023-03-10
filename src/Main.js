import React, { useEffect, useState } from 'react';
import { getProfiles } from './services/service';
import {Link} from 'react-router-dom';

const Main = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getProfiles().then((res) => {
            setData(res.data);
        });
    }, [])
    return (
        <>
            <table style={{ border: "1px solid" }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td >Name: {item.name}</td>
                            <td >Email: {item.email}</td>
                            <td >Phone: {item.phone}</td>
                        </tr>
                    );
                })}
            </table>
            <Link to="/message"> 
            <button>Redirect</button>
            </Link>
        </>
    );
};

export default Main;
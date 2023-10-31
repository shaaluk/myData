import "./apiP.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Apipractice = () => {

    const [userdata, setData] = useState([]);

    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    console.log(response);
                    setData(response.data);
                })
        }, []);

    return (
        <div>Api practice
            {userdata.map((data) => {
                return (
                    <div>
                        <table>
                            <tr>
                                <th>NAME </th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address ZipCode</th>
                                <th>Latitude</th>
                            </tr>


                            <tr>
                                <td>{data.name} </td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.address.zipcode}</td>
                                <td>{data.address.geo.lat}</td>
                            </tr>
                        </table>
                    </div>
                )

            })}
        </div>
    )
}

export default Apipractice;
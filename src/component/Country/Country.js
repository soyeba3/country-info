import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {flags, name, nativeName, region, capital} = props.country
    return (
            <tr className='tr'>
                <td className='flag-td'>
                        <img className='flag' src={flags.png} alt="" />
                </td>
                <td><Link to={`${name}`}>{name}</Link></td>
                <td className='localName'>{nativeName}</td>
                <td className='region'>{region}</td>
                <td className='capital'>{capital}</td>
            </tr>
    );
};

export default Country;
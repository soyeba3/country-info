import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState({});
    
    const {name, area, borders, capital, continents, fifa, flags, independent, languages, maps, population, region, startOfWeek, status, timezones, } = countryDetail;
    
    let language = "";
    for(let x in languages){
        language += languages[x] + ", "
    }
  
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>  
            setCountryDetail(data[0]))
    },[]);

    const containerStyle = {
        width: '350px',
        height: '200px',
      };
      const center = {
        lat: countryDetail.latlng && countryDetail.latlng[0],
        lng: countryDetail.latlng && countryDetail.latlng[1]
      };
    
    return (
        <div>
            <div className='img-container'>
                <h2 className='name'>{name?.common}</h2>
                <div className='img-div'>
                        <img src={flags?.png} alt="" />
                        <p><small>Flag : {name?.common}</small></p>
                    </div>
                
                </div>
                {/* <div className='detail-div'> */}
                    <table id="customers">
                        <tr>
                            <th>Name : </th>
                            <th>{name?.common}</th>
                        </tr>
                        <tr>
                            <td>Capital : </td>
                            <td>{capital}</td>
                        </tr>
                        <tr>
                            <td>Area : </td>
                            <td>{area}</td>
                        </tr>
                        <tr>
                            <td>Languages : </td>
                            <td>{language}</td>
                        </tr>
                        <tr>
                            <td>Time Zone : </td>
                            <td>{timezones}</td>
                        </tr>
                        <tr>
                            <td>Independent : </td>
                            <td>{independent ? 'True' : 'flase'}</td>
                        </tr>
                        <tr>
                            <td>Borders : </td>
                            <td>{borders?.join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Region : </td>
                            <td>{region}</td>
                        </tr>
                        <tr>
                            <td>Continents : </td>
                            <td>{continents}</td>
                        </tr>
                        <tr>
                            <td>Fifa : </td>
                            <td>{fifa}</td>
                        </tr>
                        <tr>
                            <td>Population : </td>
                            <td>{population}</td>
                        </tr>
                        <tr>
                            <td>Google Maps : </td>
                            <td><a href={maps?.googleMaps}>Click here</a></td>
                        </tr>
                        <tr>
                            <td>Start Of Week : </td>
                            <td>{startOfWeek}</td>
                        </tr>
                        <tr>
                            <td>Status : </td>
                            <td>{status}</td>
                        </tr>
                    </table>
                {/* </div> */}
                <div className='map-div'>
                <LoadScript
                    googleMapsApiKey="AIzaSyAmdrjU2hJs_dV0qqDmOCOGnu_pOdhUnJA"
                    >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={6}
                    >
                    </GoogleMap>
                </LoadScript>
                </div>
        </div>
    );
};

export default React.memo(CountryDetail)
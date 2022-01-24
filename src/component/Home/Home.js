import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Home.css'
import mainImage from '../../images/World-Flag-map-Nell-L.jpg'

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
        <h1>World Countries List</h1>
        <div className="image-div">
          <img className="main-image" src={mainImage} alt="" />
        </div>
        <div className="wrap sticky">
          <div className="mTable">
            <div className="mTableRow">
                <div className="mTableCell1" style={{width : '5%', backgroundColor: '#BDCEE7'}}></div>
                <div className="mTableCell" style={{width : '24%', backgroundColor: '#C5DCEE'}}><b>Name</b></div>
                <div className="mTableCell" style={{width : '24%', backgroundColor: '#BDCEE7'}}><b>Local Name</b></div>
                <div className="mTableCell" style={{width : '24%', backgroundColor: '#C5DCEE'}}><b>Region</b></div>
                <div className="mTableCell" style={{width : ' 23%'}}><b>Capital City</b></div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="row">
            <table>
                <colgroup>
                    <col style={{width : '9%'}}/>
                    <col style={{width : '23%'}}/>
                    <col style={{width : '23%'}}/>
                    <col style={{width : '23%'}}/>
                    <col style={{width : '22%'}}/>
                </colgroup>
                <tbody>
                    {
                      countries.map((country => <Country key= {country.name} country = {country}></Country>))
                    }
                </tbody>
            </table>
          </div>
        </div>
      
    </div>
  );
};

export default Home;

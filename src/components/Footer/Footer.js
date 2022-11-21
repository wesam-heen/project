import { Container } from "react-bootstrap";
import { FaFacebookF ,FaInstagram,FaTiktok,FaLinkedinIn} from "react-icons/fa";
import "./Footer.css";
import {useState } from "react";
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";

const Country = [
  ["Commonwealth of Dominica", "/programs/Dominica/about"],
  ["Saint Christopher and Nevis", "/programs/Nevis/about"],
  ["Antigua and Barbuda", "/programs/Antigua/about"],
  ["SaintLucia", "/programs/Saint/about"],
  ["Grenada", "/programs/Grenada/about"],
  ["Vanuatu", "/programs/Vanuatu/about"],
  ["Greece", "/programs/Greece/about"],
  ["Cyprus", "/programs/cyprs/about"],
];

const Footer = () => {
  const [filterdCountry,setFilterdCountry]=useState([]);
  const [finalSearch,SetFinalSearch]=useState([])
  const SearchFunction=(e)=>{
    const viewProgram=document.querySelector('.view-programs-when-search-footer');
    viewProgram.style.display='block';
    setFilterdCountry([])
    SetFinalSearch([...new Set(filterdCountry)])
  Country.forEach(country=>{
    country[0].toLowerCase().includes(e.target.value.toLowerCase())&&setFilterdCountry([...filterdCountry,country]);
    e.target.value!=null?viewProgram.style.display='block':viewProgram.style.display='none'
  })

  }
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1 pe-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'19px',letterSpacing:'2px',fontWeight:'bold'}}>
              Programs
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'10px'}}>
            <ul>
              <li><Link to='/programs/Dominica/about'>Commonwealth of Dominica</Link></li>
              <li><Link to='/programs/Nevis/about'>Saint Christopher and Nevis </Link></li>
              <li><Link to='/programs/Antigua/about'>Antigua and Barbuda</Link></li>
              <li><Link to='/programs/Saint/about'>Saint Lucia</Link></li>
              <li><Link to='/programs/Grenada/about'>Grenada</Link></li>
              <li><Link to='/programs/Vanuatu/about'>Vanuatu</Link></li>
            </ul>
          </div>
          <div className="col-md-1">
            <ul>
              <li><Link to='/programs/Greece/about'>Greece</Link></li>
              <li><Link to='/programs/cyprs/about'>Cyprus</Link></li>
            </ul>
          </div>
          <div className="col-md-1 ps-2">
            <p style={{ color: "var(--secondary-color)",fontSize:'19px',letterSpacing:'2px',fontWeight:'bold'}} className="">
              Categories
            </p>
          </div>
          <div className="col-md-2" style={{paddingLeft:'35px'}}>
            <ul className="important-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/ourservices'>Services</Link></li>
              <li><Link to='/programs/cyprs/about'>Programs</Link></li>
              <li><HashLink to='/#ContactUs'>Contact Us</HashLink></li>
              <li><HashLink to='/#AboutUs'>About Us</HashLink></li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <p style={{ color: "var(--secondary-color)",fontSize:'18px',letterSpacing:'2px',textAlign:'center'}} className="">
              Search
            </p>
            <div className='footer-search'>
            <input type="text" placeholder="search..." className="search-input" onChange={SearchFunction} />
            <BsSearch className="search-btn text-white" />
            <div className="view-programs-when-search-footer">
              <ul>
              {
                finalSearch.map(country=>{
                  return(
                    <li key={country[0]}><Link to={country[1]}>{country[0]}</Link></li>
                  )
                })
              }
              </ul>
            </div>
          </div>
            <div className="social-icons-footer">
            <a href='https://www.facebook.com/avioncitizenship1/' className="social-icon facebook"><FaFacebookF/></a>
            <a href='https://www.instagram.com/avioncitizenship1/' className="social-icon instagram "><FaInstagram/></a>
            <a href='https://www.tiktok.com/@avioncitizenship?is_from_webapp=1&sender_device=pc' className="social-icon tiktok "><FaTiktok/></a>
            <a href='https://www.linkedin.com/company/avion-citizenship2020/' className="social-icon linkedin "><FaLinkedinIn/></a>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyRight pt-4">
      Copyright © 2022 Avion Citizenship | Powered by <br/>Just Try
    </div>
    </div>

    
  );
};

export default Footer;

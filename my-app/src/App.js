import './App.css';
import React from "react";
import Home from '../src/components/Home'
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy'
import Faqs from './components/Faqs'
import DonorTerms from './components/DonorTerms'
import CharityRegistration from './components/CharityRegistration'
import AddCharity from './components/AddCharity'
import './Data.css'
import './Navbar.css'
import './button.css'
import CharityList from './components/CharityList'
function App() {
  return (
    <BrowserRouter>
      <div >
        <div className="header">
          <nav className="navbar">

            <div className="nav-logo">

              <Link to='/' >

                <h1 style={{ color: "#4f545c", }}>Logo</h1>

              </Link>
            </div>

            <div className="menu-icon" >

              <i className='fas fa-bars' />
            </div>

            <ul className='nav-menu' >

              <li className="nav-item">
                <Link to="/home" className="nav-links" > HOME</Link>
              </li>

              <li className="nav-item">
                <Link to="/donor-term-conditions" className="nav-links" > DONOR TERMS & CONDITIONS </Link>
              </li>

              <li className="nav-item">
                <Link to="/privacy-policy" className="nav-links" > PRIVACY POLICY </Link>
              </li>

              <li className="nav-item">
                <Link to="/faqs" className="nav-links" > FAQs</Link>
              </li>

              <li className="nav-item">
                <Link to="/donor-terms" className="nav-links" > DONOR TERMS </Link>
              </li>

            </ul>

            <Link to="/charity-registration">
              <button className="btn"> Sign Up</button>
            </Link>
          </nav>
        </div>

        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/home' component={Home} />
          <Route path='/donor-term-conditions' component={DonorTerms} exact={true} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/faqs' component={Faqs} />
          <Route path='/charity-registration' component={CharityList} />

          <Route path='/add_charity' component={AddCharity} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;

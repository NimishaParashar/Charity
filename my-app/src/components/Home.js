import React from 'react'
import './../Data.css'
import workflow from './../workflow.jpg'
import Button from '@material-ui/core/Button';
import charity from "./../charity.jpg";
import donate from "./../donate.jpg";
import RoomIcon from '@material-ui/icons/Room';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';





function Home() {
    return (<div className="wrapper">

        {/* header part*/}
        {/* <div className="header"><App /></div> */}

        {/* first body div */}

        <div className="first-content">


            <p className="para">Amplify Your Gifts</p><br /><br />


            <button className="btn1" onClick={() => alert("Hi there")}>Connet With Us</button><br />


        </div>


        {/* second body div ---image and content is divided into two parts */}

        <div className="second-content">
            <div className=" side-left ">

                <h1 style={{ color: "#327ba8", fontFamily: "  'Anton', sans-serif", marginTop: "50px", fontWeight: "bolder" }}>WHAT WE OFFER!!!</h1><br /><br /><br />
                <h2 style={{ color: "#496673", fontSize: "27px" }}>Exploit the potency of the donation tax credits and blessing them back to the charity </h2><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "20px", color: "#396173" }}> Our vision is straightforward, to help organisations and our angels who are donating their money. </p><br /><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "20px", color: "#396173" }}> (Firm Name) gives charities a basic and simple stage to offer their givers the capacity to consequently give their charge credit back to that charity.  </p><br /><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "20px", color: "#396173" }}>For each of your benefactors that select into (Firm Name), we claim the accessible charge credit for that gift and pass it
                 specifically back to you, boosting the initial gift by up to 33 - 47%..</p>

                <h2 style={{ color: "#496673", marginTop: "60px", fontSize: "27px" }}>Aid to the Charities</h2><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#396173" }}>(Firm Name) presently has effective coordinates with a number of charities, and is looking to assist as numerous charities as we can.
                So, notwithstanding of estimate, in case you're a Modern New Zealand charity, devout association, school or other approved donee, (Firm Name) is available for you and your donors. </p><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#396173" }}>If you are a charity that fundraises through charities or a benefactor that gives to charities through charities, charge credits on those gifts can effortlessly be skilled to charity through our (Firm Name) and Charities association. We are truly energized to be a
                  portion of the Charities family, and have charities as a part of the (website name) family.</p><br />

                <Button>Load for more</Button>
            </div>
            <div className="side-right" style={{ marginTop: "25px" }}><img src={charity} className="image1" /></div>
        </div>

        {/* third body div in which work flow is inserted    */}

        <div className="third-content" style={{ textAlign: "center" }}>
            <img src={workflow} className="image2" /></div>

        {/* fourth body div in which heading and paragraph is there  */}

        <div className="datainsert" style={{ marginTop: "90px" }}>
            <h2 style={{ color: "#355c5c", fontSize: "30px" }}>Automating the donation of tax credits</h2><br /><br />

            <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#545351" }}>TaxGift provides a simple and secure service to charities, integrating with Inland Revenue to claim a tax credit.
            TaxGift receives the refund on behalf of the charity and donates it to back to the charity as a
            further donation. This means your original donation is amplified by 33.33%, being the tax credit amount,
            and is magnified further as each subsequent qualifying tax credit is re-gifted to your original charity each tax
            year, up to approximately 47% of the original donation. Charities pay only a small fee for our service of integrating
            with Inland Revenue to claim these tax credits,
                       and your original donation goes through untouched, as per the usual manner of donation.</p> <br /><br /><br /><br />

            <h2 style={{ color: "#355c5c", fontSize: "30px" }}>NOW DIRECTLY AND INDIRECTLY HELPING THOUSANDS OF CHARITIES..</h2>
        </div>


        {/* fifth body div in which about us heading is there  */}

        <div className="aboutus" style={{ textAlign: "center" }}>
            <h1 style={{ color: "#327ba8", fontFamily: " 'Anton', sans-serif", marginLeft: "10px", marginTop: "100px", fontSize: "40px" }}>ABOUT US</h1>
        </div>

        {/* sisth body div in which about us detail is there  */}

        <div className="four-content" style={{ marginTop: "100px" }}>
            <div className="onleft"><img src={donate} className="image3" /></div>
            <div className="onright"><p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#545351", marginTop: "90px" }}>
                Gift was born out of a desire to help those in the charity sector maximise their fundraising, and to help generous New Zealanders maximise their giving.</p><br /> <br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#545351" }}
                >Drawing on her involvement with charities and social enterprises and her previous experience as a
                    commercial lawyer specialising in technology, Hannah Andrews is leading TaxGift into showing New Zealand
                                              a new way to give. </p><br /><br />
                <p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize: "19px", color: "#545351" }}>TaxGift is a corporate member of the Fundraising Institute of New Zealand and abides by its
                                         code of ethics and code of conduct.</p>
            </div>
        </div>





        {/* eight body div in which contact us icons available */}

        <div className="insertdetails">
            <p>Join Us </p>

            <div clasName="jointous"><br /><br />

                <Tooltip title="Gmail" aria-label="add">
                    <Fab href={"mailto: nehachoudhary0814@.com"} >
                        <EmailIcon />
                    </Fab>
                </Tooltip>

                <Tooltip title="Contact" aria-label="add">
                    <Fab href={"tel:+6421-239-0100"}>
                        <AddIcCallIcon />

                    </Fab>
                </Tooltip>
                <Tooltip title="Facebook" aria-label="add">
                    <Fab href={"https://www.facebook.com/neha.choudhary.585559"}>
                        <FacebookIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="Whatsapp" aria-label="add">
                    <Fab href={"https://api.whatsapp.com/send?phone=+64212390100"}>
                        <WhatsAppIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="Address" aria-label="add">
                    <Fab href={"http://maps.google.com/maps?q=61/51+Ireland Road+Mount Wellington,+Auckland+1060"}>
                        <RoomIcon />
                    </Fab>
                </Tooltip>
            </div>

        </div>

        {/* ninth body div in which footer available */}

        <div className="footer">
            <h4>Donate Plus</h4>
            <p style={{}}>Copyright © 2021  <span style={{ color: 'white' }}>donateplus - All Rights Reserved.</span></p>
        </div>

    </div>)
}

export default Home;

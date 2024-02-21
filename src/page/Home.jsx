import React from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import Things from '../component/footer/Things'

const Container = () => {
    return (
        <div className='maincontainer'>
            <div className="container">
                <div className="logoBlock">

                    {/* <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/nmp.svg?alt=media&token=c2b9a14a-e36c-46f5-bb2c-3f28704b0537" alt="not found!" /> */}
                    <span className='logotext'>AI assistant for child welfare</span>
                </div>
                <div className="heading">
                    <span>

                        We build for institutions to track children wellbeing and deliver care support to parents.

                    </span>


                </div>

                <div className="para">

                </div>
                <Things />

                <Link to="/form" style={{ textDecoration: 'none' }}>


                    <div className="btn">
                        Onboard Today
                    </div>
                </Link>
                <div className='footer'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/nmp.svg?alt=media&token=c2b9a14a-e36c-46f5-bb2c-3f28704b0537" alt="" />
                    Almalabs &copy; all copyright reserved <br /><br />REACH US AT :
                    <a className='linkfooter' href='mailto:support@tryalma.in'>
                        support@tryalma.in
                    </a>
                </div>

                <div>
                </div>

            </div>
        </div>
    )
}

export default Container

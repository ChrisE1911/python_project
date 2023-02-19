import React from "react";
import './Footer.css';

function Footer() {

    return (
        <div className="footer-container">
            <h4 className="about-header">About MidCupid</h4>
            <a className="repo-link" href="https://github.com/ChrisE1911/python_project">GitHub Repository</a>
            <div className="contact-header"><i class="fa-brands fa-github fa-2xl"></i>   Contact Us</div>
            <ul className="contacts-list">
                <li>
                    <a href="https://github.com/ChrisE1911">Christopher Eatmon</a>
                </li>
                <li>
                    <a href="https://github.com/MauroAlvarez1997">Mauro Alvarez</a>
                </li>
                <li>
                    <a href="https://github.com/kiwookim">Ki Woo Kim</a>
                </li>
                <li>
                    <a href="https://github.com/SeanKim912">Sean H. Kim</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;

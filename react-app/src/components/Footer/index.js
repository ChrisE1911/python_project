import React from "react";
import './Footer.css';

function Footer() {

    return (
        <div className="footer-container">
            <h4 className="about-header">
                <a className="repo-link" href="https://github.com/ChrisE1911/python_project">About MidCupid</a>
            </h4>
            <div className="contact-header"><i class="fa-brands fa-github fa-2xl"></i>Contact Us</div>
            <ul className="contacts-list">
                <li>Christopher Eatmon:
                    <a className="dev-link" href="https://github.com/ChrisE1911">Github</a> |
                    <a className="dev-link" href="https://chrise1911.github.io/">Personal Site</a>
                </li>
                <li>Mauro Alvarez:
                    <a className="dev-link" href="https://github.com/MauroAlvarez1997">Github</a> |
                    <a className="dev-link" href="https://MauroAlvarez1997.github.io">Personal Site</a>
                </li>
                <li>Ki Woo Kim:
                    <a className="dev-link" href="https://github.com/kiwookim">GitHub</a> |
                    <a className="dev-link" href="https://kiwookim.github.io/">Personal Site</a>
                </li>
                <li>Sean H. Kim:
                    <a className="dev-link" href="https://github.com/SeanKim912">GitHub</a>  |
                    <a className="dev-link" href="https://seankim912.github.io/">Personal Site</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;

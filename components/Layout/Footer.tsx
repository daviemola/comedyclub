import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="navbar-brand">
                    <Logo />
                  </a>
                </Link>

                <p>
                  Magna fringilla urna porttitor rhoncus dolor purus non enim.
                  Ante metus dictum at tempor commodo ullamcorper. Nulla
                  pharetra diam sit amet
                </p>

                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-maxcdn"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-reddit-alien"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fa fa-fa fa-paper-plane"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget">
                <h3>Helpful Links</h3>

                <ul className="import-link">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Ticket Your Event</a>
                  </li>
                  <li>
                    <a href="#">Refunds and Exchanges</a>
                  </li>
                  <li>
                    <a href="#"> Get Help</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget ml-30">
                <h3>About Us</h3>

                <ul className="import-link">
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Ticketmaster Blog</a>
                  </li>
                  <li>
                    <a href="#">Ticketing 101</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Our Network</h3>

                <ul className="import-link">
                  <li>
                    <a href="#">Live Nation</a>
                  </li>
                  <li>
                    <a href="#">House of Blues</a>
                  </li>
                  <li>
                    <a href="#">Front Gate Tickets</a>
                  </li>
                  <li>
                    <a href="#"> TicketWeb</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right-area">
        <div className="container">
          <div className="copy-right-content">
            <p>{`© Comedy Grind ${new Date().getFullYear()}`}</p>
          </div>
        </div>
      </div>

      <div className="go-top">
        <i className="fa fa-angle-up"></i>
      </div>
    </>
  );
}

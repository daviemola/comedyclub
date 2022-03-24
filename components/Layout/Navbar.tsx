import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="#">
          <a className="navbar-brand">
            <Logo />
          </a>
        </Link>

        <button
          className="navbar-toggler menu-icon"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Comedy shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Artists
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Popular
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                New Shows
              </a>
            </li>
          </ul>

          <div className="other-option">
            <ul>
              <li>
                <a href="#" className="no-active">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

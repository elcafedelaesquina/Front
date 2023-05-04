import React from "react";
import  Style  from "./footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

export const Footer = () => {
  return (
    <>
      <footer className={Style.footerDistributed}>
        <div className={Style.footerLeft}>
          <h3>
            La esquina <br /> del cafe
          </h3>

          <div className={Style.footerIcons}>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <SiTiktok />
            </a>
          </div>
        </div>

        {/* <div className="footer-right">
          <p>Contact Us</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div> */}
      </footer>
    </>
  );
};

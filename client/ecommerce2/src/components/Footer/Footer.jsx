import React from "react";
import "./Footer.css";
import qr from '../../assets/Qrcode 1.png'
import appStore from '../../assets/download-appstore.png'
import play from '../../assets/png-transparegoogle-play-app-store-android-wallets-text-label-logo.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="op1">
          <div className="exclusive">Exclusive</div>
          <div class="subscribe">Subscribe</div>
          <div class="get-10-off">Get 10% off your first order</div>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="op2">
          <div class="support">Support</div>
          <div class="bijoy-sarani-dhaka">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div class="exclusivegmailcom">exclusive@gmail.com</div>
          <div class="exclusivegmailcom">+88015-88888-9999</div>
        </div>
        <div className="op3">
          <div class="support">Account</div>
          <div class="exclusivegmailcom">My Account</div>
          <div class="exclusivegmailcom">Login / Register</div>
          <div class="exclusivegmailcom">Cart</div>
          <div class="exclusivegmailcom">Wishlist</div>
          <div class="exclusivegmailcom">Shop</div>
        </div>
        <div className="op4">
          <div class="support">Quick Link</div>
          <div class="exclusivegmailcom">Privacy Policy</div>
          <div class="exclusivegmailcom">Terms Of Use</div>
          <div class="exclusivegmailcom">FAQ</div>
          <div class="exclusivegmailcom">Contact</div>
        </div>
        <div className="op5">
          <div class="support">Download App</div>
          <div class="save-3-with">Save $3 with App New User Only</div>
          <img class="qrcode-1-icon" alt="" src={qr}></img>
        </div>
        <div className="op5">
          <img class="appStore" alt="" src={appStore}></img>
          <img class="playStore" alt="" src={play}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;

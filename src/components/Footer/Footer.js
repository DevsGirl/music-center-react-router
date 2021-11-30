import { Nav } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
          
      <div className=" container copyright-border footer-bg   py-4 ">
         <div className="copyright">
               <p>Copyright © 2021 by Saifun. all rights reserved</p>
           </div>
            
           <div className="footer-menu ">
              <Nav to="#" className="mx-4">About</Nav>
              <Nav to="#" className="mx-4">Tips and Tricks</Nav>
              <Nav to="#" className="mx-4">Service</Nav>
          </div>      
      </div>
       
    );
};

export default Footer;
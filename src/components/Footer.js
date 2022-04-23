import React from 'react'

function Footer() {
  return (
    <div>
                {/* ======= Footer ======= */}
                <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3><span style={{color: "#00FF00"}}>G-</span><i>thinkers</i></h3>
                    <p>
                      University Way <br />
                      Nb 535022, Kenya<br /><br />
                      <strong>Phone:</strong> +254 74674 9307<br />
                      <strong>Email:</strong> jessy.bandya5@gmail.com<br />
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4></h4>
                  <ul>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4></h4>
                  <ul>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                    <li> <a href="#"></a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>If you want to get our latest informations or updates, can subscribe here.</p>
                  <form>
                    <input type="email" name="email" placeholder='Enter your email'/><input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>G-Thinkers</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ */}
              Created with ❤️ by <a href="https://laughing-darwin-c668f3.netlify.app/">Jessy Bandya</a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        
    </div>
  )
}

export default Footer
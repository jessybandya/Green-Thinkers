import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Footer from '../../components/Footer';
import { Carousel } from 'react-bootstrap';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

    
function Events() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [show, setShow] = React.useState(false)

    const showRest = () => {
      setShow(true)
    }
  
  return (
    <div>
    {/* ======= Top Bar ======= */}
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center"><span>+254 746 749 307</span></i>
          <i className="bi bi-clock d-flex align-items-center ms-4"><span>24/7</span></i>
        </div>
        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
          </ul>
        </div>
      </div>
    </div>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0"><a href="/"><span style={{color: "#00FF00"}}>G-</span><i>Thinkers</i></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto " href="/">Home</a></li>
            <li><a className="nav-link scrollto " href="/about">About</a></li>
            <li><a className="nav-link scrollto" href="/projects">Projects</a></li>
            <li><a className="nav-link scrollto " href="/objectives">Objectives</a></li>
            <li><a className="nav-link scrollto active" href="/events">Events</a></li>
            <li><a className="nav-link scrollto" href="/team">Team</a></li>
            <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
            {/* <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li> */}
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
              <ul>
                <li><a href="/support">Support Us</a></li>
                <li><a href="/gallery">Gallery</a></li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleClickOpen}/>
        </nav>
        {/* .navbar */}
        <a href="/join-us" className="book-a-table-btn scrollto d-none d-lg-flex">Join Us</a>
      </div>
      <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    </BootstrapDialogTitle>
    <DialogContent dividers style={{marginTop:10}}>
      <Typography gutterBottom>
       <center><a className="nav-link scrollto " style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/">Home</a></center>
       <center><a className="nav-link scrollto active" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/about">About</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/projects">Projects</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/objectives">Objectives</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/events">Events</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/team">Team</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/contact">Contact</a></center>
       <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={handleClose} href="/join-us">Join Us</a></center>
       <center className="dropdown">
       <a><span onClick={showRest} style={{fontWeight: 'bold',color:'black'}} >Drop Down</span> <i style={{fontWeight: 'bold',color:'black'}} onClick={showRest} className="bi bi-chevron-down" /></a>             
       </center>
       {show === true &&(
             <>
           <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={() => setShow(false)} href="/support">Suport Us</a></center>
           <center><a className="nav-link scrollto" style={{fontWeight: 'bold',color:'black'}} onClick={() => setShow(false)} href="/gallery">Gallery</a></center> 
             </>
           )}
      </Typography>

      <Typography style={{color:'#fff'}} gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Typography>
    </DialogContent>
    <DialogActions>

    </DialogActions>
  </BootstrapDialog>
    </header>
    {/* End Header */}

            {/* ======= Hero Section ======= */}
            <section id="heroObjectives" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row">
            <div className="col-lg-8">
                <h1>Annual Events...</h1>
                <h3 style={{marginTop:20}}>
              <span style={{color:'#00FF00',fontWeight:'bold'}}>G-Thinkers</span> is an environmental initiative that offers a garbage management system for sustainability.
              </h3>
              </div>

            </div>
          </div>
        </section>
        {/* End Hero */}
        <div>
                       {/* ======= Events Section ======= */}
                       <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Events</h2>
            <p>Our Annaul Events.</p>
          </div>
          <div className="events-slider swiper" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper">

            <Carousel>
            <Carousel.Item>
            <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img style={{height:300,objectFit:'cover'}} src="https://www.lutheranworld.org/sites/default/files/styles/news_item/public/ethiopia-tree-planting.jpg?itok=WjSiBzR7" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Tree Planting</h3>
                    <div className="price">
                      <p><span>January, 2022</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>{/* End testimonial item */}
            </Carousel.Item>


<Carousel.Item>
<div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img style={{height:300,objectFit:'cover'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCUUM3htwqkZLSuwiWDev5kU9NvGQtZzIRQ&usqp=CAU" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Sewage Cleaning</h3>
                    <div className="price">
                      <p><span>May, 2022</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>{/* End testimonial item */}
</Carousel.Item>



<Carousel.Item>
<div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img style={{height:300,objectFit:'cover'}} src="https://www.givewell.org/sites/all/themes/gw_basic/images/new-top-charities/SMC1.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Charity</h3>
                    <div className="price">
                      <p><span>September, 2022</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>{/* End testimonial item */}
</Carousel.Item>

            </Carousel>
             


            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Events Section */}
        </div>

        <Footer />
</div>
  )
}

export default Events
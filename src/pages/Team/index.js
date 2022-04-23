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

    
function Team() {
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
            <li><a className="nav-link scrollto" href="/events">Events</a></li>
            <li><a className="nav-link scrollto active" href="/team">Team</a></li>
            <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
            {/* <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li> */}
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
              <ul>
              <li><a href="/support">Support Us</a></li>
                    <li><a href="/gallery">Our Gallery</a></li>
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
            <section id="heroTeam" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row">
            <div className="col-lg-8">
                <h1>Our Team...</h1>
                <h3 style={{marginTop:20}}>
              <span style={{color:'#00FF00',fontWeight:'bold'}}>G-Thinkers</span> is an environmental initiative that offers a garbage management system for sustainability.
              </h3>
              </div>

            </div>
          </div>
        </section>
        {/* End Hero */}
        <div>
                       {/* ======= Chefs Section ======= */}
                       <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>Our Proffesional Team</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                <img style={{height:260,objectFit:'cover'}} src="assets/img/jude.jpg" className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Jude Kwach</h4>
                    <span>Founder</span>
                  </div>
                  <div className="social">
                    <a href><i className="bi bi-twitter" /></a>
                    <a href><i className="bi bi-facebook" /></a>
                    <a href><i className="bi bi-instagram" /></a>
                    <a href><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                <img style={{height:260,objectFit:'cover'}} src="assets/img/odero.jpg" className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Odero Phelix</h4>
                    <span>Patron</span>
                  </div>
                  <div className="social">
                    <a href='https://twitter.com/Nyatieng4' target='_blank'><i className="bi bi-twitter" /></a>
                    <a href='https://www.facebook.com/odero.lufez.79' target='_blank'><i className="bi bi-facebook" /></a>
                    <a href='https://www.instagram.com/odero_phelix' target='_blank'><i className="bi bi-instagram" /></a>
                    <a href='https://linkedin.com/in/phelix-odero-25354a1b4' target='_blank'><i className="bi bi-linkedin" /></a>
                    <a href="mailto: oderoengineer@gmail.com" target='_blank'><i className="bi bi-google" /></a>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                <img style={{height:260,objectFit:'cover'}} src="assets/img/jessy.jpg" className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Jessy Bandya</h4>
                    <span>Software Developer</span>
                  </div>
                  <div className="social">
                  <a href='https://twitter.com/jessybandya' target='_blank'><i className="bi bi-twitter" /></a>
                    <a href='https://www.facebook.com/profile.php?id=100010990051978' target='_blank'><i className="bi bi-facebook" /></a>
                    <a href='https://www.instagram.com/jessybandya' target='_blank'><i className="bi bi-instagram" /></a>
                    <a href='https://www.linkedin.com/in/jessy-bandya-7934a01b4' target='_blank'><i className="bi bi-linkedin" /></a>
                    <a href="mailto: jessy.bandya5@gmail.com" target='_blank'><i className="bi bi-google" /></a>
                    <a href="https://github.com/jessybandya" target='_blank'><i className="bi bi-github" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Chefs Section */}
        </div>

        <Footer />
</div>
  )
}

export default Team
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

    
function Objectives() {
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
            <li><a className="nav-link scrollto active" href="/objectives">Objectives</a></li>
            <li><a className="nav-link scrollto" href="/events">Events</a></li>
            <li><a className="nav-link scrollto" href="/team">Team</a></li>
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
        <a href="join-us" className="book-a-table-btn scrollto d-none d-lg-flex">Join Us</a>
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
                <h1>Our Goals...</h1>
                <h3 style={{marginTop:20}}>
              <span style={{color:'#00FF00',fontWeight:'bold'}}>G-Thinkers</span> is an environmental initiative that offers a garbage management system for sustainability.
              </h3>
              </div>

            </div>
          </div>
        </section>
        {/* End Hero */}
        <div>
                      {/* ======= Specials Section ======= */}
                      <section id="specials" className="specials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Objectives</h2>
            <p>Check Our Aims</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">1. Zero Hunger</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">2. Climate action</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">3. Good health and well-being </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">4. Clean water and sanitation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">5. Charity</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>ZERO HUNGER</h3>
                      <p className="fst-italic">
                      Undernourishment and hunger make people less productive and more likely to suffer disease. This prevents them from raising their income and improving their standard of living. The food and farming industries are vital in eliminating hunger and poverty.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-02.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Climate Action</h3>
                      <p className="fst-italic">
                      Sustainable Development Goal 13 urges to take action to combat climate change and its impacts*. Climate change is now affecting every country on every continent. It is disrupting national economies and affecting lives, costing people, communities and countries dearly today and even more tomorrow.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="https://i2.wp.com/blog.brightcities.city/wp-content/uploads/2020/08/ODS13_en.jpg?w=900&ssl=1" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>GOOD HEALTH AND WELL-BEING</h3>
                      <p className="fst-italic">
                      Feelings of wellbeing are fundamental to the overall health of an individual, enabling them to successfully overcome difficulties and achieve what they want out of life. Past experiences, attitudes and outlook can all impact wellbeing as can physical or emotional trauma following specific incidents.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="https://pbs.twimg.com/media/ENX6lEeXYAERKbB.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>CLEAN WATER AND SANITATION</h3>
                      <p className="fst-italic">
                      When clean water is guaranteed, communities are healthier and more resilient. Without clean water, illnesses like diarrhea, intestinal parasites, and chronic inflammation of the intestines are common and can prevent children from absorbing key nutrients and make them more susceptible to other health issues.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-06.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>CHARITY</h3>
                      <p className="fst-italic">
                      This wing focuses on joining the vulnerable groups in our society in charitable activities. Our welfare organ accepts genuine support requests which are assessed and a follow up is done instantly depending on the urgency of need and our capacity to help at the moment.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="https://www.unicef.org/southafrica/sites/unicef.org.southafrica/files/styles/hero_desktop/public/ZAF-00316hands.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Specials Section */}
        </div>

        <Footer />
</div>
  )
}

export default Objectives
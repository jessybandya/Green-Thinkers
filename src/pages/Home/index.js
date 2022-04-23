import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Carousel } from 'react-bootstrap';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";
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


function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Header />
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-8">
                <h1>Welcome to <span>G-Thinkers</span></h1>
                <h2>maximize resource value, while minimizing - and even eliminating - environmental impact so that both our economy and our environment can thrive.</h2>
                <div className="btns">
                  <a href="/objectives" className="btn-menu animated fadeInUp scrollto">Our Objectives</a>
                  <a href="/join-us" className="btn-book animated fadeInUp scrollto">Join Us</a>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
                <span style={{cursor:'pointer'}} className="glightbox play-btn" onClick={handleClickOpen}/>
              </div>
            </div>
          </div>
          {/* href="https://www.youtube.com/watch?v=HgEo7YnvJs0" */}

          <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title"         style={{backgroundColor: '#000'}}
 onClose={handleClose}>
        </BootstrapDialogTitle>
        <DialogContent dividers style={{backgroundColor:'#000'}}>
          <Typography gutterBottom>
          <video width="100%" height="100%" controls autoPlay >
      <source src="assets/videos/video1.mp4" type="video/mp4"/>
</video>


          </Typography>


        </DialogContent>
        <DialogActions         style={{backgroundColor: '#000'}}
>

        </DialogActions>
      </BootstrapDialog>
        </section>


<section class="home-slider owl-carousel js-fullheight">
      {/* <div class="slider-item js-fullheight" style="background-image: url(images/bg_1.jpg);">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text js-fullheight justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-md-12 col-sm-12 text-center ftco-animate">
            	<span class="subheading">Feliciano</span>
              <h1 class="mb-4">Best Restaurant</h1>
            </div>

          </div>
        </div>
      </div> */}


      {/* <div class="slider-item js-fullheight" style="background-image: url(images/bg_2.jpg);">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text js-fullheight justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-md-12 col-sm-12 text-center ftco-animate">
            	<span class="subheading">Feliciano</span>
              <h1 class="mb-4">Nutritious &amp; Tasty</h1>
            </div>

          </div>
        </div>
      </div> */}

      {/* <div class="slider-item js-fullheight" style="background-image: url(images/bg_3.jpg);">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div class="col-md-12 col-sm-12 text-center ftco-animate">
            	<span class="subheading">Feliciano</span>
              <h1 class="mb-4">Delicious Specialties</h1>
            </div>

          </div>
        </div>
      </div> */}
    </section>

        {/* End Hero */}


              {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={100}>
              <div className="about-img">
                <img src="https://www.calicarting.com/wp-content/uploads/2018/10/recycling-symbol-with-recyclables.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
              <span style={{color:'#00FF00'}}>G-Thinkers</span> is an environmental initiative that offers a garbage management system for sustainability.
              </h3>
              <p className="fst-italic">
              Surplus items within our possession  contributes largely garbage. If we are not using them at the moment,chances are high that they will definitely lie waste and be disposed as garbage.
              </p>
              <p className="fst-italic">
              Food garbage also contributes greatly to total garbage.  Things like fruit peels, disposed food items and vegetative materials among others are the major contributors to this. 
              </p>
              <ul>
                <h3>So <span style={{color:'#00FF00'}}>G-Thinkers</span>:</h3>
                <li><i className="bi bi-check-circle" />We provide a platform for exchanging surplus items that could otherwise end up as garbage.</li>
                <li><i className="bi bi-check-circle" />We attach value to food garbage disposed such as banana peels serves as a good animal food alongside other re-usable food wastes.</li>
                <li><i className="bi bi-check-circle" />Etc...</li>
              </ul>

            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}


            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Where we touch on...</h2>
            <p>United Nations SDGs.</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" style={{marginTop:15,cursor:'pointer'}} data-aos-delay={100}>
                <center><span>CLIMATE ACTION</span></center>
                <p>
                Sustainable Development Goal 13 urges to take action to combat climate change and its impacts*. Climate change is now affecting every country on every continent. It is disrupting national economies and affecting lives, costing people, communities and countries dearly today and even more tomorrow.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{marginTop:15,cursor:'pointer'}}>
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <center><span>ZERO HUNGER</span></center>
                <p>
                Undernourishment and hunger make people less productive and more likely to suffer disease. This prevents them from raising their income and improving their standard of living. The food and farming industries are vital in eliminating hunger and poverty.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{marginTop:15,cursor:'pointer'}}>
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <center><span>CLEAN WATER AND SANITATION</span></center>
                <p>
                When clean water is guaranteed, communities are healthier and more resilient. Without clean water, illnesses like diarrhea, intestinal parasites, and chronic inflammation of the intestines are common and can prevent children from absorbing key nutrients and make them more susceptible to other health issues.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{marginTop:15,cursor:'pointer'}}>
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <center><span>GOOD HEALTH AND WELL-BEING</span></center>
                <p>
                Feelings of wellbeing are fundamental to the overall health of an individual, enabling them to successfully overcome difficulties and achieve what they want out of life. Past experiences, attitudes and outlook can all impact wellbeing as can physical or emotional trauma following specific incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Us Section */}



            {/* ======= Menu Section ======= */}
            <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Project(s) we've implemented</h2>
            <p>Check Our Project(s)</p>
          </div>

          <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-6 menu-item filter-starters">
              <img src="https://cdn.shopify.com/s/files/1/0066/9754/9908/products/EXCHANGE_1024x1024.png?v=1609355366"  className="menu-img" alt="" />
              <div className="menu-content">
                <a href="/projects">Tu-Exchange</a><span>01/04/2021</span>
              </div>
            </div>




          </div>
        </div>
      </section>
      {/* End Menu Section */}





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






            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What they're saying about us</p>
          </div>
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper-wrapper">
       <Carousel>
         <Carousel.Item>
         <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/jude.jpg" className="testimonial-img" alt="" />
                  <h3>Jude Kwach</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
             </Carousel.Item>
             <Carousel.Item>
              {/* End testimonial item */}

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/odero.jpg" className="testimonial-img" alt="" />
                  <h3>Odero Phelix</h3>
                  <h4>Patron</h4>
                </div>
              </div>
              {/* End testimonial item */}
         </Carousel.Item>

            <Carousel.Item>
            <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/jessy.jpg" className="testimonial-img" alt="" />
                  <h3>Jessy Bandya</h3>
                  <h4>Software Developer</h4>
                </div>
              </div>{/* End testimonial item */}
              </Carousel.Item>
       </Carousel>

            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}











    <Footer />


      </div>
    </div>
  )
}

export default Home
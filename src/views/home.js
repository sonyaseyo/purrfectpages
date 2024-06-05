import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Logos1 from '../components/logos1'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import Features171 from '../components/features171'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Composed Frequent Lapwing</title>
        <meta property="og:title" content="Composed Frequent Lapwing" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3 rootClassName="hero3-root-class-name"></Hero3>
      </div>
      <div className="home-logos3">
        <Logos1 rootClassName="logos1-root-class-name"></Logos1>
      </div>
      <div className="home-gallery4">
        <Gallery1
          imageSrc="https://i.pinimg.com/236x/b0/68/e3/b068e3bf7ce9859325f37bd526e7911f.jpg"
          image1Src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/cat-on-antique-books-nora-good.jpg"
          image3Src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cat_with_book_2320356661.jpg"
          rootClassName="gallery1-root-class-name"
        ></Gallery1>
      </div>
      <div className="home-features5">
        <Features17 rootClassName="features17-root-class-name"></Features17>
      </div>
      <div className="home-features6">
        <Features18 feature1ImageSrc="https://assets.wfcdn.com/im/88451504/resize-h755-w755%5Ecompr-r85/1202/120264437/%22+Cat+On+Books+1+%22+by+Cathy+Walters+on+Canvas.jpg"></Features18>
      </div>
      <div className="home-features7">
        <Features171
          rootClassName="features171-root-class-name"
          feature1ImageSrc="https://ichef.bbci.co.uk/news/976/cpsprodpb/EBA4/production/_132842306_gettyimages-1218794240.jpg"
        ></Features171>
      </div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1 rootClassName="faq1-root-class-name"></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15 rootClassName="footer15-root-class-name"></Footer15>
      </div>
    </div>
  )
}

export default Home

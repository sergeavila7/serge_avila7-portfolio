import React from 'react';
import SEO from '../components/Seo';
import Banner from '../components/Banner';
import BannerMe from '../images/BannerMe.png';
// import "../components/background.js"

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Banner
      img={BannerMe}
      alt='Desarrollo web'
      title='Frontend Developer'
      description='Sergio Avila'
      to='/about'
      button='Conoce más sobre mí...'
    />
    <section className='home mt-5'>
      <div className='container-fluid'>
        <div className='col-12 col-md-8 row'>
          <div className='presentation pt-5'>
            <small className='presentation__title py-2'>Acerca de mí</small>
            <p className='presentation__description pt-5'>
              Hola, Soy Sergio Avila, Ingeniero en Sistemas y
              Telecomunicaciones. Tengo un gran interes en la Programación y en
              el Desarrollo Web.{' '}
            </p>
            <h3 className='presentation__title py-5'>
              Algunos de mis trabajos
            </h3>
          </div>
          <div className='presentation__work'>
            <ul>
              <li>
                <a
                  href='https://naturaredomega-ma.netlify.app/'
                  target='_blank'
                >
                  Natura
                </a>
              </li>
              <li>
                <a href='https://petgram-sjav.netlify.app/' target='_blank'>
                  Petgram
                </a>
              </li>
              <li>
                <a href='https://ps-sergeavila.netlify.app/' target='_blank'>
                  PlatziSwag
                </a>
              </li>
              <li>
                <a href='https://keen-shaw-540cf9.netlify.app/' target='_blank'>
                  PlatziConfMerch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;

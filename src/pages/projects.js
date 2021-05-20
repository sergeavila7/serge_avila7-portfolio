import React from 'react';
import SEO from '../components/Seo';
import {Main} from '../components/Main';
import {Cards} from '../components/Cards';
import Natura from '../images/Natura.png'
import Petgram from '../images/Petgram.png'
import PlatziConf from '../images/PlatziConf.png'
import PlatziSwag from '../images/PlatziSwag.png'
import '../styles/styles.scss';

const Projects = () => (

  <>
    <SEO title='Projects' />
    <Main/>
 <section className="cards">
        <div className='container-fluid'>
 <h2 className="cards__title text-center">Projects</h2>
          <div className='col-lg-12 row'>
    <Cards      
    img={Natura}
    title="Natura Red Omega"
    description="Sitio Web para Líder de Red Natura realizado con:"
    list1="GatsbyJs"
    list2="Bootstrap"
    list3="Sass"
    href="https://naturaredomega-ma.netlify.app/"
/>
    <Cards      
    img={Petgram}
    title="Petgram"
    description="App de mascotas(clon de Instagram) realizada con:"
    list1="React"
    list2="Hooks"
    list3="Styled Components"
    href="https://petgram-sjav.netlify.app/"
/>
    <Cards      
    img={PlatziConf}
    title="PlatziConfMerch"
    description="E-commerce de mercancía de Platzi realizado con:"
    list1="React"
    list2="Hooks"
    list3="Strappi y Api de Paypal"
    href="https://keen-shaw-540cf9.netlify.app/"
/>
    <Cards      
    img={PlatziSwag}
    title="PlatziSwag"
    description="Ecommerce de mercancia de Platzi realizado con:"
    list1="GatsbyJs"
    list2="Graphl"
    list3="Styled Components"
    href="https://ps-sergeavila.netlify.app/"
/>
   
   
   </div>
   </div>
   </section>
    
  </>
)

export default Projects;

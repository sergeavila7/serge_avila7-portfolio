import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'

// markup
const NotFoundPage = () => {
  return (
<div class="stars">
            <div class="custom-navbar">
                {/* <div class="brand-logo">
                    <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px"/>
                </div> */}
                {/* <div class="navbar-links">
                    <ul>
                      <li><a href="http://salehriaz.com/404Page/404.html" target="_blank">Home</a></li>
                      <li><a href="http://salehriaz.com/404Page/404.html" target="_blank">About</a></li>
                      <li><a href="http://salehriaz.com/404Page/404.html" target="_blank">Features</a></li>
                      <li><a href="http://salehriaz.com/404Page/404.html" class="btn-request" target="_blank">Request A Demo</a></li>
                    </ul>
                </div> */}
            </div>
            <div class="central-body">
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <Link to="/" class="btn-go-home">GO BACK HOME</Link>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>

        </div>
      
  )
}

export default NotFoundPage

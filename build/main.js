!function(e){var n={};function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s(s.s=6)}([function(e,n,s){e.exports=s.p+"./images/onshore_logo.svg"},function(e,n,s){e.exports=s.p+"./images/profile_picture.jpg"},function(e,n,s){e.exports=s.p+"./images/jessi.jpg"},function(e,n,s){e.exports=s.p+"./images/uncw_logo.jpg"},function(e,n,s){e.exports=s.p+"./images/stapleton.jpg"},function(e,n,s){e.exports=s.p+"./images/spencer.jpg"},function(e,n,s){"use strict";s.r(n);s(7),s(9),s(0),s(4),s(2),s(5),s(3),s(1);function t(){document.getElementById("js-nav-menu").classList.toggle("hidden")}document.addEventListener("DOMContentLoaded",function(){for(var e=document.getElementById("js-nav-menu"),n=document.getElementsByClassName("js-menu-dismiss"),s=0;s<n.length;s++)n[s].addEventListener("click",function(){e.classList.contains("hidden")||e.classList.add("hidden")});document.getElementById("js-nav-menu-button").addEventListener("click",t)});var i=function(){scrollBy(0,-60)};window.addEventListener("hashchange",i)},function(e,n,s){},,function(e,n,s){e.exports='<!doctype html>\n<html lang="en">\n\n<head>\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta charset="utf-8">\n  <title>Onshore Studios</title>\n  <meta name="description" content="We build amazing websites">\n  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">\n  <script>\n    (function (i, s, o, g, r, a, m) {\n      i[\'GoogleAnalyticsObject\'] = r;\n      i[r] = i[r] || function () {\n        (i[r].q = i[r].q || []).push(arguments)\n      }, i[r].l = 1 * new Date();\n      a = s.createElement(o),\n        m = s.getElementsByTagName(o)[0];\n      a.async = 1;\n      a.src = g;\n      m.parentNode.insertBefore(a, m)\n    })(window, document, \'script\', \'https://www.google-analytics.com/analytics.js\', \'ga\');\n\n    ga(\'create\', \'UA-99046738-1\', \'auto\');\n    ga(\'send\', \'pageview\');\n  <\/script>\n  <meta name="robots" content="all,follow">\n  <meta name="msapplication-TileColor" content="#da532c">\n  <meta name="theme-color" content="#ffffff">\n  <link rel="stylesheet" href="./main.css">\n  <script src="../main.js"><\/script>\n  <script src="../build/main.js"><\/script>\n  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"\n    crossorigin="anonymous">\n</head>\n\n<body class="font-primary">\n  <nav class="nav" id="myNav">\n    <div class="nav-brand-container">\n      <a rel="noopener" data-scroll href="#home" class="nav-brand">Onshore Studios</a>\n    </div>\n    <div class="block text-primary lg:hidden">\n      <button class="nav-btn" id="js-nav-menu-button">\n        <svg class="hamburger-menu" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <title>Menu</title>\n          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />\n        </svg>\n      </button>\n    </div>\n    <div class="hidden nav-content-container" id="js-nav-menu">\n      <div class="nav-container">\n        <div class="nav-link-container">\n          <a rel="noopener" data-scroll href="./index.html#home" class="js-menu-dismiss nav-link">\n            Home\n          </a>\n          <a rel="noopener" data-scroll href="./index.html#about" class="js-menu-dismiss nav-link">\n            About\n          </a>\n          <a rel="noopener" data-scroll href="./index.html#services" class="js-menu-dismiss nav-link">\n            Services\n          </a>\n          <a rel="noopener" data-scroll href="./index.html#solutions" class="js-menu-dismiss nav-link">\n            Solutions\n          </a>\n          <a rel="noopener" data-scroll href="./index.html#testimonials" class="js-menu-dismiss nav-link">\n            Testimonials\n          </a>\n          <a rel="noopener" data-scroll href="./index.html#recent-work" class="js-menu-dismiss nav-link">\n            Recent Work\n          </a>\n          <a rel="noopener" data-scroll href="./contact.html" class="js-menu-dismiss nav-link">\n            Contact\n          </a>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <div class="js-menu-dismiss z-10 bg-grey-lightest w-full">\n    <section id="home">\n      <div class="logo-header">\n        <img src="'+s(0)+'" width="32px" height="48px" alt="">\n        <h1>Onshore Studios</h1>\n      </div>\n      <div class="home-content">\n        <h1>Digital Design & Web Development</h1>\n        <h2>We create, design, and develop innovative apps and websites that bring value to your business</h2>\n        <a href="./contact.html">Let\'s work together</a>\n      </div>\n    </section>\n    <section id="about" class="bg-black">\n      <div class="section-header">\n        <h1>We provide value for our clients</h1>\n        <p class="section-content">\n          We offer a variety of services, focused on increasing conversion through digital\n          mediums. We specialize in responsive, SEO friendly websites, and have experience with a variety of\n          programming languages, frameworks, and technologies. Our other areas of expertise are graphic design,\n          branding, and consulting.\n        </p>\n      </div>\n    </section>\n    <section id="services">\n      <div class="section-header">\n        <h1>We offer many services</h1>\n      </div>\n      <div class="section-content-flex">\n        <div class="section-item">\n          <h2>Discovery</h2>\n          <p>We will research your industry, and competitors, in order to make sure you are on top.</p>\n        </div>\n        <div class="section-item">\n          <h2>Branding</h2>\n          <p>From logos to digital advertisements, we offer many graphic design services.</p>\n        </div>\n        <div class="section-item">\n          <h2>Design</h2>\n          <p>We’ll help you stand out from your competitors with our creative designs.</p>\n        </div>\n        <div class="section-item">\n          <h2>Development</h2>\n          <p>We create responsive websites, using the current best practices, to increase online conversion.</p>\n        </div>\n      </div>\n    </section>\n    <section id="solutions">\n      <div class="section-header">\n        <h1>We can work with a variety of web technologies</h1>\n        <p class="section-content">For us, it is important to offer a wide variety of solutions to help increase the\n          value of our client\'s web presence. We work with businesses of all sizes and scales, from start-ups to\n          established companies. We seek to work with people who have exciting visions, that share the same passion we\n          do. We are able to work with modern web frameworks, such as React and Vue.js, web application frameworks,\n          like Ruby on Rails, and CSS frameworks and pre-processors. Whatever your business requires, we have you\n          covered</p>\n      </div>\n    </section>\n    <section id="testimonials">\n      <div class="section-header">\n        <div class="circle">\n          <img src="'+s(1)+'" alt="Ann Stapleton Profile Image" height="64px">\n        </div>\n      </div>\n      <div class="section-content-flex">\n        <div class="section-item">\n          <p>"It\'s so fun to see UNCW students succeed! Andrew\'s design professor referred him to me and he constructed\n            my original web site during his first design class. I am really pleased with the work Andrew and Ethan have\n            done for me for the new page design, it\'s inspiring to see how they have developed their business. They are\n            an excellent team to work with, with great customer service and terrific ideas."</p>\n          <p class="testimonial-author">Dr. Ann E. Stapleton // Professor at the University of North Carolina -\n            Wilmington</p>\n        </div>\n      </div>\n    </section>\n    <section id="recent-work">\n      <div class="section-header">\n        <h1>Recent Work</h1>\n        <p class="section-subtitle">\n          Here are some of our most recent projects.\n        </p>\n        <p class="section-subtitle">\n          Check out our <a href="https://www.instagram.com/onshorestudios/?hl=en">Instagram</a> to see even more.\n        </p>\n      </div>\n      <div class="section-content-grid">\n        <div class="section-item"><img height="200px" src="'+s(2)+'" alt="Keeping Yesterday Logo">\n          <p class="section-item-content">Keeping Yesterday Logo</p>\n        </div>\n        <div class="section-item"><img height="200px" src="'+s(3)+'" alt="Keeping Yesterday Logo">\n          <p class="section-item-content">UNCW Aquatics Logo</p>\n        </div>\n        <div class="section-item"><img height="128px" src="'+s(4)+'" alt="">\n          <p class="section-item-content">Dr. Ann E. Stapleton\'s Website</p>\n        </div>\n        <div class="section-item"><img src="'+s(5)+'" alt="">\n          <p class="section-item-content">Composite Cases Packaging</p>\n        </div>\n      </div>\n    </section>\n    <section>\n      <div class="section-btn">\n        <p>Are you interested in starting a project?</p>\n        <a href="./contact.html" class="">contact us</a>\n      </div>\n    </section>\n    <footer>\n      <div class="footer-content">\n        <p>All content © Onshore Studios 2018</p>\n      </div>\n    </footer>\n  </div>\n  <script src="https://www.google.com/recaptcha/api.js"><\/script>\n  <link href="https://fonts.googleapis.com/css?family=Muli:300,400,700" rel="stylesheet">\n</body>\n\n</html>\n'}]);
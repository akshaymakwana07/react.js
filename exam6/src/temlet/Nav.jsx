import React from 'react'

function Nav() {
  return (
    <header>
    <div class="navbar navbar-expand-lg position-sticky top-0 ">
    <div class="container">
        <div class="navbar-brand text-light">
            <h1>ACADEMIA</h1>
            <p>ONLINE EDUCATION & LEARNING</p>
        </div>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-support">
            <span class="navbar-toggler-icon bg-white"></span>

        </button>
    
    <nav class="collapse navbar-collapse " id="navbar-support">
        <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item"><a href="" class="nav-link text-light">Home</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">All Courses</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">About</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">Team</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">Pricing</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">Journey</a></li>
            <li class="nav-item"><a href="" class="nav-link text-light">Contect</a></li>


        </ul>
    </nav>
</div>

</div>

<div class="container text-light" id="text">
<p>WELCOME TO ACADEMIA</p>
<h1>Best Online Education <br></br>
   Expertise</h1>

   <p>
       Far far away, behind the word mountains, far from the countries Vokalia <br></br>
       and Consonantia, there live the blind texts.
   </p>
   <button type="button" id="btn1">GET STARTED NOW! <i class="bi bi-arrow-right"></i></button>
   <button type="button" id="btn2">VIEW COURSE <i class="bi bi-arrow-right"></i></button>


</div>
</header>
  )
}

export default Nav

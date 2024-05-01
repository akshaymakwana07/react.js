import React from 'react'

function Nav() {
  return (
    <header class="navbar  navbar-expand-lg ">
    <div class="container">
        <div class="logo">
            <h1>Criate. 
            </h1>
        </div>
       
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-support">
            <span class="navbar-toggler-icon bg-white"></span>

        </button>
    
    <nav class="collapse navbar-collapse " id="navbar-support">
        <ul class="navbar-nav ms-auto text-center ">
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">Home</a></li>
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">Work</a></li>
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">Srevices</a></li>
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">about</a></li>
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">Blog</a></li>
            <li class="nav-item"><a href="" class="nav-link text-dark fs-5">Contect</a></li>


        </ul>
    </nav>

    </div>
</header>
  )
}

export default Nav

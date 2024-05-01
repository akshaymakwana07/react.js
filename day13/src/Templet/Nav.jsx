import React from 'react'

function Nav() {
  return (
    <header class="navbar navbar-expand-lg position-sticky top-0">
    <div class="container">
        <div class="navbar-brand">
            <img src="image/logo (1).png" alt=""></img>
        </div>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-support">
            <span class="navbar-toggler-icon bg-white"></span>

        </button>
    
    <nav class="collapse navbar-collapse " id="navbar-support">
        <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item"><a href="" class="nav-link">HOME</a></li>
            <li class="nav-item"><a href="" class="nav-link">ABOUT</a></li>
            <li class="nav-item"><a href="" class="nav-link">TRIPS</a></li>
            <li class="nav-item"><a href="" class="nav-link">BLOGS</a></li>
            <li class="nav-item"><a href="" class="nav-link">CONTECT</a></li>


        </ul>
    </nav>
</div>


</header>
  )
}

export default Nav

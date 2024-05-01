import React from 'react'

function Footer() {
  return (
    <footer class="d-flex justify-content-evenly align-items-center"> 
        <div class="foot d-flex justify-content-evenly align-items-center"> 
        <div class="ftr d-flex flex-column justify-content-center align-items-center">
          <div class="ftext">
            <h3>Instagram</h3>
        </div>

        <div class="fim d-flex justify-content-evenly align-items-center flex-wrap">
                <div class="fimg">
                    <img src="image/img_1.jpg" alt=""></img>
                </div>
                <div class="fimg">
                    <img src="image/img_2.jpg" alt=""></img>
                </div>
                <div class="fimg">
                    <img src="image/img_3.jpg" alt=""></img>
                </div>
                <div class="fimg">
                    <img src="image/img_4.jpg" alt=""></img>
                </div>
                <div class="fimg">
                    <img src="image/img_5.jpg" alt=""></img>
                </div>
                <div class="fimg">
                    <img src="image/img_6.jpg" alt=""></img>
                </div>
            </div>

        </div>
          
        <div class="ftr"> 
            <h3>Quick Links</h3> <br></br> <br></br>

            <h5>
                About Us <br></br><br></br>
                Testimonials <br></br><br></br>
                Terms of Service <br></br><br></br>
                Privacy <br></br><br></br>
                Contact Us
            </h5>
        </div>    

        <div class="ftr">

            <h3>Newsletter</h3> <br></br><br></br>
            <p>
                Lorem ipsum dolor sit amet, consectetur <br></br>
                adipisicing elit. Nesciunt odio iure animi <br></br>
                ullam quam, deleniti rem!
            </p> <br></br>
            <input type="text" placeholder="Email"></input> <button>SEND</button>

        </div>  

        </div>
    </footer>
  )
}

export default Footer

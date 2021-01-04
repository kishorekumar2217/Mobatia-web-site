
import React from 'react';

const Contant = () =>{
  return(

    <section class="w3l-contact-11 py-5">
<div class="contacts-main py-lg-5 py-md-4">
  <div class="title-content text-center">
    <h6 class="sub-titlehny">Contact</h6>
    <h3 class="hny-title">Get in touch with us</h3>
</div>
  <div class="form-41-mian section-gap mt-5">
    <div class="container">
      <div class="d-grid align-form-map">
        <div class="form-inner-cont">
          <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="signin-form">
            <div class="form-input">
              <label for="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName" placeholder="" />
            </div>
            <div class="form-input">
              <label for="w3lSender">Email(Required)*</label>
              <input type="email" name="w3lSender" id="w3lSender" placeholder="" required="" />
            </div>
            <div class="form-input">
              <label for="w3lMessage">Message(Required)*</label>
              <textarea placeholder="" name="w3lMessage" id="w3lMessage" required=""></textarea>
            </div>
            <div class="form-submit text-right">
                <button type="submit" class="btn btn-style btn-primary">Submit Message</button>
              </div>
          </form>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.393605982946!2d76.87937181475372!3d8.55809669384844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befb78555599%3A0x82d1223c7e8e52f!2sMobatia%20Technology%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1582780262945!5m2!1sen!2sin"
            frameborder="0" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="contant11-top-bg mt-lg-5 mt-4">
    <div class="container">
      <div class="d-grid contact pt-lg-4">
        <div class="contact-info-left d-grid text-left">
          <div class="contact-info mt-4">
            <h4>Trivandrum Office</h4>
            <p class="mb-3"><label>Address: </label> <a href="tel:+1-2345-678-11"><h6>Technopark, 1B, Carnival, Technopark Rd, Technopark Campus, Thiruvananthapuram, Kerala 695581</h6> </a></p>
            <p class="mb-3"><label>Email : </label> <a href="mailto:industrie@email.com" class="email"><h6>info@mobatia.com</h6></a></p>
            <p class="mb-3"><label>Phone : </label> <a href="tel:91-471-2527456"><h6>91-471-2527456</h6></a></p>
            <p class="mb-3"><label>Hours : </label> <a href=""><h6>Mon-Fri:9am–7pm</h6></a></p>


          </div>
         
   
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
    
  );
}

export default Contant ;


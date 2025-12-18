import "../assets/css/Contact.css";


function Contact() {
  return (
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="contact-card light">
            <h2 className="contact-title">CONTACT US</h2>

            <div className="contact-item">
              <span className="contact-label">Name</span>
              <p>M. Vijaya Baskar B.A.,</p>
            </div>

            <div className="contact-item">
              <span className="contact-label">
                <i className="bi bi-whatsapp contact-icon whatsapp"></i>WhatsApp</span>
              <p><a href="https://wa.me/919865828795" className="contact-link" target="_blank"
                rel="noreferrer">+91 98658 28795
    </a></p>
            </div>
            <div className="contact-item">
              <span className="contact-label">
                 <i className="bi bi-telephone-fill contact-icon phone"></i>
                 Phone</span>
              <p><a href="tel:+918072535369" className="contact-link">
      +91 80725 35369
    </a></p>
            </div>
            <div className="contact-item">
              <span className="contact-label"><i className="bi bi-envelope-fill contact-icon email"></i>
              Email</span>
              <p><a href="mailto:sigaramsevatrust@gmail.com" className="contact-link">
     sigaramsevatrust@gmail.com
    </a></p>
            </div>

            <div className="contact-item">
              <span className="contact-label">
    <i className="bi bi-geo-alt-fill contact-icon address"></i>Address</span>
              <p>
                No. 72 C, <br/> 
                Jaihindpuram main road,<br />
                Madurai, <br/>
                Tamil Nadu – 625 011
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container mt-5">
    //   <h3>Contact Us</h3>
    //   <p>Email: sigaramsevatrust@gmail.com</p>
    //   <p>Phone: +91 80725 35369</p>
    //   <p>WhatsApp: +91 98658 28795</p>
    //   <p>Location: Madurai, India</p>
    // </div>
  );
}

export default Contact;

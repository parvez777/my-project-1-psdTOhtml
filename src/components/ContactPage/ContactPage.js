import EmailIcon from '@mui/icons-material/Email';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './ContactPage.css';
const ContactPage = () => {
    return (
        <div>
        <div className='contactHero'>
            <h1>Contact</h1>
        <div className="abMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>
        {/* Contact Infi  */}
        <div>
        <Container className='contactInfo'>
<div className="contactInfoBix">
<PhoneCallbackIcon sx={{width: "80px", height: "80px"}}/>
<h2>1-800-123-1234</h2>
<p>You can call us any time</p>
</div>
<div className="contactInfoBix">
<EventNoteIcon sx={{width: "80px", height: "80px"}}/>
<h3 style={{textAlign: "center"}}>51 Francis Street, San <br /> Diego, CA 91712 United <br /> States</h3>
</div>
<div className="contactInfoBix">
<EmailIcon sx={{width: "80px", height: "80px"}}/>
<h2>info@gmail.com</h2>
<p>Feel free to email us your questions</p>
</div>
        </Container>
        </div>
{/* Get In Touch  */}
<div>
<Container>
    <div className="getInTouch">
<h1>Get In Touch</h1>
<div className="inpForm">
    <form action="">
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='E-mail' />
        <input type="text" placeholder='Phone' />
        <textarea name="" id="" cols="48" rows="6" placeholder='Message' style={{width: "100%", padding: "10px 8px"}}></textarea>
        <input type="submit" value="SEND"  style={{width: "200px", background: "green", color: "white", cursor: "pointer", border: "none", borderRadius: "1px", marginTop: "10px"}}/>
    </form>
</div>
</div>
</Container>
</div>
        </div>
    );
};

export default ContactPage;
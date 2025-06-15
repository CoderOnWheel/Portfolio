import '../style/Sidebox.css';
import mail from '../assets/gmail.png';
import phone from '../assets/mobile-number.png';
import address from '../assets/location.png';
import profilepicture from '../assets/ppp1.png';
const Sidebox = () => {
  return (
    <>
    <div className="main-sidebox">
      <div className="sidebox-header">
        <img src={profilepicture} alt="" srcset="" className='profile-picture' />
        <h2 className="MyName">Mihir Ram Anita Shirsath</h2>
        <h4 className="position">Full Stack Developer</h4>
      </div>
        <hr />
        <div className="info-col">
    <img src={mail} alt="Mail" className="info-logos" />
    <div className="info-details">
      <p className="info-title">Mail:</p>
      <a href="mailto:mihirshirsath2308@gmail.com" className="info-link">
        mihirshirsath2308@gmail.com
      </a>
    </div>
  </div>


  <div className="info-col">
    <img src={phone} alt="Phone" className="info-logos" />
    <div className="info-details">
      <p className="info-title">Phone:</p>
      <a href="tel:+918149999999" className="info-link">
        +91 9892453264
      </a>
    </div>
  </div>


  <div className="info-col">
    <img src={address} alt="Address" className="info-logos" />
    <div className="info-details">
      <p className="info-title">Location:</p>
      <a className="info-text">Thane, Maharashtra, India</a>
    </div>
  </div>
</div>
        <hr />
        <div className="social-links">
  <a href="https://github.com/CoderOnWheels" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/mihir-shirsath-8b0b1a1b2/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/coderonwheels/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
  </a>
  <a href="https://www.youtube.com/@coderonwheels" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png" alt="YouTube" />
  </a>
</div>
    </>
  )
}

export default Sidebox
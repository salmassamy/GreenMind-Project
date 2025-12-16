import logo from "../assets/logo.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import twitter from "../assets/Twitter.png";

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="w-full bg-[#F7FEF4] flex justify-center">
        <div className="w-[1440px] px-[56px] py-[80px] grid grid-cols-3 gap-[120px] text-[#4b5563]">
          
          {/* About */}
          <div className="max-w-[320px]">
            <img
              src={logo}
              alt="GreenMind Logo"
              className="w-[100px] h-[100px] mb-[16px] object-contain"
            />
            <p className="text-[36px] leading-[44px]">
              Supporting smart and sustainable agriculture. Providing seeds,
              soil, and reliable growing solutions for all.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[48px] font-semibold mb-[24px] text-[#6b3b2a]">
              Pages
            </h3>
            <ul className="space-y-[12px] text-[36px]">
              <li className="text-green-600">Home</li>
              <li>Features</li>
              <li>Products</li>
              <li>Reviews</li>
              <li>Why Us</li>
              <li>About Us</li>
              <li>Articles</li>
            </ul>
          </div>

          {/* Contact */}
<div>
  <h3 className="text-[48px] font-semibold mb-[24px] text-[#6b3b2a]">
    Contact
  </h3>

  <ul className="space-y-[12px] text-[36px]">
    <li>+201023456789</li>
    <li>support@GreenMind.com</li>
    <li>Al-Kaiman, Al-Fayoum - Egypt</li>
  </ul>

  {/* Social Icons */}
  <div className="flex gap-[24px] mt-[24px]">
    <a href="#" className="cursor-pointer">
      <img
        src={facebook}
        alt="Facebook"
        className="w-[49px] h-[48px]"
      />
    </a>

    <a href="#" className="cursor-pointer">
      <img
        src={instagram}
        alt="Instagram"
        className="w-[49px] h-[48px]"
      />
    </a>

    <a href="#" className="cursor-pointer">
      <img
        src={twitter}
        alt="Twitter"
        className="w-[49px] h-[48px]"
      />
    </a>
  </div>
</div>


        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full bg-[#E3D1C8] flex justify-center">
        <div className="w-[1440px] h-[153px] flex items-center justify-center">
          <p className="text-[36px] text-white/80">
            Created by{" "}
            <span className="font-semibold text-white">TEAM NAME</span> | all
            rights reserved by EELU
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

import logo from "../assets/logo.png";
import user from "../assets/user.png";

function Navbar() {
  return (
    <header className="w-full bg-[#e7d5cc] flex justify-center">
      {/* Container 1440 */}
      <div className="w-[1440px] h-[130px] px-[56px]  flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="GreenMind Logo" className="h-[90px] w-auto" />

        {/* Links */}
        <nav className="flex gap-[98px] text-[24px] font-bold text-[#374151]">
          {["Home", "Features", "Products", "Reviews", "Why Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative cursor-pointer transition hover:text-[#6b3b2a]"
            >
              {item}

              {/* underline */}
              <span className="absolute left-0 -bottom-3 h-[3px] w-0 bg-[#6b3b2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* User */}
        
      <button className="bg-transparent p-0 border-none">
  <img
    src={user}
    alt="User"
    className="w-[50px] h-[50px] rounded-full cursor-pointer"
  />
</button>


      </div>
    </header>
  );
}

export default Navbar;

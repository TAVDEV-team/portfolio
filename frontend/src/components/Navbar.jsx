export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-transparent  text-white px-10">
      <div className="flex-1">
        <a href="#home">
  <img src="/TAVDEV.png" alt="TAVDEV Logo" className="h-16 w-auto" />
</a>

      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

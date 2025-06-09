import remWasteLogo from "./../assets/rem-waste-logo.png";

const Navbar = () => (
  <div className="navbar p-5 bg-neutral text-primary-content">
    <div className="flex-1 flex">
      <aside className="p-2 bg-primary rounded-full">
        <img src={remWasteLogo} alt="REM Waste logo" className="size-15" />
      </aside>
    </div>

    <p className="flex flex-none text-end gap-x-2">
      Made by
      <a
        href="https://github.com/SharonnElfride"
        target="_blank"
        className="link link-primary link-hover"
      >
        Sharonn
      </a>
    </p>
  </div>
);

export default Navbar;

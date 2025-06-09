import remWasteLogo from "./../assets/rem-waste-logo.png";

const Footer = () => {
  return (
    <div className="footer sm:footer-horizontal p-5 bg-neutral text-neutral-content items-center justify-center sm:justify-around">
      <aside className="p-2 bg-primary rounded-full">
        <img src={remWasteLogo} alt="REM Waste logo" className="size-25" />
      </aside>
      <p>
        <span className="flex gap-x-2">
          Made with ❤️ by
          <a
            href="https://github.com/SharonnElfride"
            target="_blank"
            className="link link-primary link-hover"
          >
            Sharonn
          </a>
        </span>
      </p>
      <div>
        <p className="footer-title">Links</p>
        <ul>
          <li>
            <a
              href="https://www.renewableenergymarketing.net/skip-hire/"
              target="_blank"
              className="link link-primary link-hover"
            >
              REM Waste
            </a>
          </li>
          <li>
            <a
              href="https://wewantwaste.co.uk"
              target="_blank"
              className="link link-primary link-hover"
            >
              We want waste (WWW)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

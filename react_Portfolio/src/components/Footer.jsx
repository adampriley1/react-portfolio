function Footer() {
  return (
  <div>
    <footer className="container" id="contact-me">
      <h3 className="text-center pt-5">Connect</h3>
        <div className="d-flex justify-content-center pb-5">
        <a
          className="icon fs-1 m-4 p-2"
          href="https://www.linkedin.com/in/adam-riley-17ba2627"
        >
          <i className="bi bi-linkedin text-icon"></i>
        </a>
        <a className="icon m-4 p-2" href="https://github.com/adampriley1">
          <i className="bi fs-1 bi-github text-icon"></i>
        </a>
    
        <a className="icon m-4 p-2" href="mailto:adampriley1@hotmail.com">
          <i className="bi fs-1 bi-envelope text-icon"></i>
        </a>
      </div>
      <p className="text-center"> Copyright Adam Riley 2024</p>
    </footer>
  </div>
  );
}

export default Footer;

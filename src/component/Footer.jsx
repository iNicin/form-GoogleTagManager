import React from 'react';

function Footer() {

return ( 
    <footer className="page-footer font-small special-color-dark fixed-bottom pt-5">

        <div className="">

            <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              ▬
                <a className="btn-floating btn-fb mx-1" href="https://www.github.com/inicin" target="_blank">
                 Github
                </a>
            </li>
            <li className="list-inline-item">
              ▬
                <a className="btn-floating btn-tw mx-1" href="https://www.linkedin.com/in/nicin" target="_blank">
                 Linkedin
                </a>
            </li>
            </ul>

        </div>

        <div className="footer-copyright text-center text-muted py-3">© 2020 Copyright:
           
            <a> Nicin </a>
        </div>

    </footer>
  );

}

export default Footer;
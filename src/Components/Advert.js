import React from 'react';

const Advert = () => (
  <div className="container-fluid" id="advert_section">
    <div className="row">
      <div className="col-md-6 col-12 d-flex flex-column flex-lg-column advert_statement">
        <span className="advert_statement_h">
          Aenean sit amet aliquam quam. Phasellus mi nisi, scelerisque eget
          cursus id, porta nec arcu.
          {' '}
        </span>
        <p className="advert_statement_p">
          In non orci elementum, ullamcorper ante vitae, lobortis enim. Praesent
          dui arcu, tempus at venenatis in, placerat quis purus. Maecenas
          condimentum lacinia neque, interdum aliquet leo faucibus gravida.
          Vestibulum faucibus a urna et blandit. In non orci elementum,
          ullamcorper ante vitae, lobortis enim. Praesent dui arcu, tempus at
          venenatis in, placerat quis purus.
        </p>
      </div>
      <div className="col-md-6 col-12 advert_image">
        <img
          className="img-fluid"
          src="https://user-images.githubusercontent.com/25479050/103773808-efaf7000-502b-11eb-859a-c00e77518e87.png"
          alt="product distribution worldwide"
        />
      </div>
    </div>
  </div>
);

export default Advert;

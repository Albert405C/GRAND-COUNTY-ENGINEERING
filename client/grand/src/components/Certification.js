import React, { useState } from 'react';
import './Certification.css';

function Certifications() {
  const [modalImage, setModalImage] = useState(null);

  const handleClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  const certificates = [
    { src: "/Certificates/Annual practice license.JPG", name: "Annual Practice License" },
    { src: "/Certificates/Cert of registration..JPG", name: "Certificate of Registration" },
    { src: "/Certificates/change of name cert.JPG", name: "Change of Name Certificate" },
    { src: "/Certificates/companies act.JPG", name: "Companies Act Certificate" },
    { src: "/Certificates/kra pin cert.JPG", name: "KRA PIN Certificate" },
    { src: "/Certificates/procurement cert.JPG", name: "Procurement Certificate" },
    { src: "/Certificates/Qualified water contractor.JPG", name: "Qualified Water Contractor" },
    { src: "/Certificates/Tax compliance cert.JPG", name: "Tax Compliance Certificate" }
  ];

  return (
    <>
      <section id="certifications" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Certifications</h2>
          <div className="row">
            {certificates.map((cert, index) => (
              <div key={index} className="col-lg-3 col-md-4 mb-4">
                <div className="cert-wrapper">
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="img-fluid"
                    onClick={() => handleClick(cert.src)}
                  />
                  <button className="cert-button" onClick={() => handleClick(cert.src)}>
                    {cert.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full screen" className="modal-image" />
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;

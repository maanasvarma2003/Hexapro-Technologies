import React from 'react'

function components() {
  return (
    <div className="components">
      <div className='imgback2' >
        <img id='iamge2' style={{
          height: "600px",
          width: "100%",
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat"
        }}
          src="https://www.deskera.com/blog/content/images/2021/06/digital-customer-service-concept-image-1.jpeg"
          alt="Alternate" />
      </div>
      <hr style={{
        color: "black",
        width: "50%",
        position: "absolute",
        left: "25%",
        border: "3px solid black",
      }}
      ></hr>
      <div className='abt my-5'>
        <p className='para' style={{ fontSize: "1.5rem" }}>OUR SERVICES</p>
        <p>
          Branded and UN-branded assembled desk top computers Laptops of all leading brands and all Software Products, Authorised dealers for leading networking product range that includes managed and UN-Managed Ethernet switches and structured cabling products and also authorised dealers for Seagate, Samsung, LG, Hp, Dell, Lenovo, AMD, Tvse, Epson,LG, APC, ACER, Microsoft, All range of USB Products. We are Genuine Intel Dealers (GID – 10042533) selling Intel Processors Security Products and LCD Projectors, Gaming Products, UPS and Invertors, Surveillance Items i.e. CCTV / IP Camera / Security Solutions, Door Access Solutions and Biometric Products.
        </p>
      </div>
      <div style={{display:"flex", gap:"10rem" ,backgroundColor:"#8383af"}}>
      <div className='containerpara' style={{ width: "330px", marginLeft:"12rem" }}>
        <h4 className='m-3'>Mission Critical Services
        </h4>
        <p>
          Server infrastructure availability provided by the AS division is a critical component of business success for data centres, remote offices and small businesses. And are crucial to keep your business up and running always. MCS is designed for supporting critical instances of failure and thereby improving the server uptime. There are also several proactive components in the framework which help in alerting you of any problems, so that we can take preventive measures even before failure happens.

          HEXAPRO has a pool of specialists available round the clock, to take control of the server and fix problems if any. They can also identify the failed parts using remote diagnostics and also send an support engineer with the spares when needed.
        </p>
      </div>
      <div className='containerpara' style={{ width: "330px" }}>
        <h4 className='m-3'>Facility Management Services
        </h4>
        <p>
        FM services include Help Desk, Desktop Services, Asset Management, Network Management, Data Centre Services, Mail Services and Disaster Recovery Services.
        Through Facilities Management, HEXAPRO integrates the planning operations and day to day management of IT resources into the business needs of the client at the client’s workplace.
        To compete in today’s global market, enterprises must adopt emerging technologies, while maintaining over cost effectiveness to ensure lower cost of Ownership of IT infrastructure. One of the most popular strategies to safely achieve this goal is through outsourcing of IT Infrastructure Services. The Facilities Management Services team is a highly reliable resource for lowering your infrastructure maintenance costs. It serves as an independent source, managing the complex technology of your legacy environments, the introduction of new technology, as well as providing capable hands who can deliver these services.. You also enjoy lower costs at lower risk rates.
        </p>
      </div>
      </div>
    </div>
  )
}

export default components;
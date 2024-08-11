import React from 'react'
function Products() {
  return (
    <div className="product">
     <div className='imgback2' >
      <img id='iamge2' style={{
        height: "600px",
        width: "100%",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"
      }}
        src="https://lirp.cdn-website.com/b6e93599/dms3rep/multi/opt/softprice+comp+sales-1920w.jpg"
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
        <p className='para' style={{fontSize:"1.5rem"}}>OUR PRODUCTS</p>
      <p>
      Branded and UN-branded assembled desk top computers Laptops of all leading brands and all Software Products, Authorised dealers for leading networking product range that includes managed and UN-Managed Ethernet switches and structured cabling products and also authorised dealers for Seagate, Samsung, LG, Hp, Dell, Lenovo, AMD, Tvse, Epson,LG, APC, ACER, Microsoft, All range of USB Products. We are Genuine Intel Dealers (GID – 10042533) selling Intel Processors Security Products and LCD Projectors, Gaming Products, UPS and Invertors, Surveillance Items i.e. CCTV / IP Camera / Security Solutions, Door Access Solutions and Biometric Products.
      </p>
    </div> 

  </div>
  )
}

export default Products;
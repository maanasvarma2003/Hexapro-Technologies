import React from 'react'
function About() {
  return (
    <div className="about">
      <div className='imgback' >
        <img id='image' style={{
          height: "600px",
          width: "100%",
          backgroundSize: 'cover',
          backgroundRepeat: "no-repeat"
        }}
          src="https://www.motocms.com/blog/wp-content/uploads/2017/11/1040-563-5.jpg"
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
        <p>
          We are pleased to introduce ourselves as IT Solutions and IT-Infrastructure Company providing Technology Solutions and Services. Established in the year 1999 by young engineer Mr. Hemendra Varma. who has put in years of rich experience dealing with reputed companies like Wipro, Xerox and Texas Instruments, IBM and Intel.
        </p>

        <p> Our aim is to provide superior quality products with very reasonable price to our esteemed Clients. Our team consists of well-qualified & most experienced engineers who can take care of the client’s needs under all circumstances.
        </p>
      </div>
    </div>
  )
}

export default About
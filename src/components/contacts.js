import React from 'react'
function contacts() {
    return (
        <div className="contacts">
            <div style={{ display: "flex", justifyContent: "center" , flexDirection:"column"}}>
                <h2> Send Us an Enquiry</h2>
                <i class="fa-solid fa-envelope" style={{fontSize:"3rem"}}></i>

                <h4 className='my-3'>Don't hesitate to contact us</h4>
                <h4 className='my-3'>Ready for offers and cooperation</h4>
                <p className='m-0'>Phone: +91 9900124091</p>
                <p>    Email: hexapro1@gmail.com</p>


            </div>
            <div className='container' style={{ width: "500px", backgroundColor: "#8383af", borderRadius: "10px", boxShadow: "10px 10px 10px grey", margin: "5px 0px 2rem 30%" }}>
                <b> <div className='abt my-3'>
                    <div class="mb-3" style={{ display: "flex", justifyContent: "space-around" }}>
                        <label for="exampleFormControlInput1" class="form-label">Name
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" style={{ width: "200px" }} /></label>
                        <label for="exampleFormControlInput1" class="form-label">Phone
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone" style={{ width: "200px" }} /></label>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Send Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div></b>
                <button className='btn10' style={{ borderRadius: "20px", marginBottom: "2rem", height: "7vh", width: "17vw" }} >SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default contacts
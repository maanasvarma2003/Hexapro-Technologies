import React from 'react'
function body() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner main">
          <div class="carousel-item active">
            <img src="https://www.protection1.com.au/wp-content/uploads/2020/09/CCTV-Cameras-01.jpg" class="d-block w-100" alt="alt" />
          </div>
          <div class="carousel-item">
            <img src="https://hexaprotechnologies.com/assets/images/slider-3-1920x1138.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://hexaprotechnologies.com/assets/images/slider-2-1920x1279.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <p style={{ marginBottom: "0px"}}>
        <h1 style={{ marginBottom: "2rem", fontWeight:"bolder", marginTop: "2rem",color: "#8383af" }}>Welcome to Hexapro Technologies</h1>
        <p style={{fontSize:"1.5rem",fontWeight:"bold",marginBottom:"1rem"}}>We are pleased to introduce ourselves as one among the best Distributors of IT Solutions and IT-Infrastructure in Bangalore. Started in the year 1999 by young engineer Mr. Hemendra Varma.
          </p>
      </p>
    </div>
  )
}
export default body
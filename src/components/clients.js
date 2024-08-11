import React from 'react'

function clients() {
    return (
        <div className="clients">
            <div className='imgback2' >
                <img id='iamge2' style={{
                    height: "600px",
                    width: "100%",
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat"
                }}
                    src="https://www.saveeat.co/wp-content/uploads/2020/02/attirer-les-clients.jpg"
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
            <div className='abt my-5 container'>
                <p className='para' style={{ fontSize: "1.5rem" }}>FEW OF OUR CLIENTS</p>
                <p style={{ marginLeft: "21vw" }}>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>ADA</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>HAL</li>
                        <li class="list-group-item"style={{width:"200px",height:"60px"}}>BESCOM</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>Stanley seatimg</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>ADE</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>BEL</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-md">
                        <li class="list-group-item p-4" style={{width:"200px",height:"60px"}}>Canara Bank</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>Indian Bank</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>Visveraya Iron & Steel Plant</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-lg">
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>High Court OF Karnataka</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>Reliance Infocom Ltd</li>
                        <li class="list-group-item" style={{width:"200px",height:"60px"}}>Life insurance corporation of India</li>
                    </ul>
                </p>
            </div>

        </div>
    )
}

export default clients;
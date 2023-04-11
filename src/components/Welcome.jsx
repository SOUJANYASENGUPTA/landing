import './Welcome.css';
const Welcome = ()=>{

    function handleScroll() {
        window.scroll({
          top: document.getElementById('ban').offsetHeight,
          left: 10, 
          behavior: 'smooth',
        });
}
    return(
        <div>
        <div className="wrap animate pop" id='ban'>
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 className="animate slide-left pop delay-4">One Click Pick</h1>
				<p className="animate slide-left pop delay-5" style={{color:'white',marginBottom:2.5}}>One Click Pick</p>
			</div>
			<div className="image-content animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div className="under">
				<button className='butt' onClick={handleScroll}>
                   <div className='text'>Shop Now</div>
                </button>
			</div>
	</div>
    <br></br>
    
    </div>
    )
}
export default Welcome;
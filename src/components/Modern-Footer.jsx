
const Footer = ()=>{
    const linkStyle = {
        textDecoration: 'none',
        fontSize:'12px',
        direction: 'ltr'
    };
    return(
        <>
        <footer className="  text-white" style={{backgroundColor:'#191970'}}>
            <div className="row pt-3 pr-4">
                <div className=" col-3 d-flex align-items-center justify-content-end " >
                    <img className=" rounded-5" src="../../public/assets/images/MTDBLogo.jpg" alt="" />
                </div>
                <div className="col-9 pt-4" >
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">THE BASICS</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>About TMDB</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Contact Us</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Support Forums</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>API</a>
                                    </li> 
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>System Status</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">GET INVOLVED</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Contribution Bible</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Add New Movie</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Add New TV Show</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">COMMUNITY</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Guidelines</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Discussions</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Leaderboard</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">LEGAL</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Terms of Use</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>API Terms of Use</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>Privacy Policy</a>
                                    </li>
                                    <li>
                                    <a href="#!" className="text-white" style={linkStyle}>DMCA Takedown Request</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container p-4 pb-0 text-center" >
                <section className="mb-4">
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-google" /></a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333',borderRadius:'49%'}} href="#!" role="button"><i className="fab fa-github" /></a>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-white" href="https://www.themoviedb.org/">TMDB Movies</a>
            </div>
        </footer>
        </>
    )
}
export default Footer
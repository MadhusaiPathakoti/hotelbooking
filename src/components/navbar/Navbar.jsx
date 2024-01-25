import './Navbar.css';

const Navbar = ()=>{
    return(
       <div className="navbar">
        <div className="navcontainer">
            <span className='logo'>Hotel Booking</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
       </div>
    )
}
export default Navbar;
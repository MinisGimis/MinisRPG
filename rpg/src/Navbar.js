import './navbar.css'


const Navbar = () => {

    return (
        <nav className="navbar">
            <h1><a className="navhead" href="/">MinisRPG</a></h1>
            <div className="links">

                <button className="navbtn"
                onClick={() => {
                    console.log("adventure")
                }}>Adventure</button>

                <button className="navbtn"
                onClick={() => {
                    console.log("shop")
                }}>Shop</button>

                <button className="navbtn"
                onClick={() => {
                    console.log("inventory")
                }}>Inventory</button>

                <button className="navbtn" 
                onClick={() => {
                    console.log("profile")
                }}>Profile</button>

            </div>
        </nav>
    )
}
export default Navbar;
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar__Container'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className='search__Container'>
                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Search for..." aria-label="Search" />
                    <button className="btn btn-outline-success search_Btn" type="submit"><i className="bi bi-search"></i></button>
                </form>                
                </div>
                <div className='profile__Container'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-bell-fill"></i></a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Profile Name <i className="bi bi-person-circle"></i></a>
                            </li> 
                                                       
                        </ul>
                        
                    </div>
                </div>
                </div>
        </nav>
        </div>
    )
}

export default Navbar;
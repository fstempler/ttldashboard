import './sidebar.css'

import ttlLogo from '../../assets/ttl_logo.png'

const Sidebar = () => {
    return (
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar__MainContainer">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img className="fs-5 d-none d-sm-inline sidebar-logo" src={ttlLogo} />
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-people sidebar_Link"/> <span className="ms-1 d-none d-sm-inline sidebar_Link">Clients</span> <i className="bi bi-chevron-down sidebar_Link"></i></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Client</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Client</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Client</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Client</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2 sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Dashboard</span> </a>                        
                    </li>
                    <hr className='separatorLine'/>                    
                    <li>                        
                        <span className="d-none d-sm-inline sidebar_Link">INTERFACE</span>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="bi bi-bar-chart-line-fill sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Analytics</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="bi bi-bar-chart-line-fill sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Reports</span></a>
                    </li>
                    <hr className='separatorLine'/>                    
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="bi bi-bar-chart-line-fill sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Rankings</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="bi bi-bar-chart-line-fill sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Task Tracking</span></a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Backlinks</span></a>
                    </li>
                    <hr className='separatorLine'/>                    
                    <li>                        
                        <span className="d-none d-sm-inline sidebar_Link">TOOLS</span>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                        <i className="bi bi-bar-chart-line-fill sidebar_Link"></i> <span className="ms-1 d-none d-sm-inline sidebar_Link">Custom Reports</span></a>
                    </li>
                                        
                </ul>                
                
            </div>
        </div>       
    </div>
</div>

    )
}

export default Sidebar
import './dashboard.css'

//Components
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <>
        <div className=''>
            <div className='row'>
                <div className='col-2 sidebar__Container'>
                    <Sidebar />
                </div>
                <div className='col-10 navbar__Container'>
                    <Navbar />
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Dashboard;
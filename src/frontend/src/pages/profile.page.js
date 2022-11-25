import { useSelector } from 'react-redux'
import { HomeNavbar } from '../components'

function HomePage() {
    const user = useSelector((state) => state.user.value)
    return (
        <>
            <HomeNavbar />
            <div style={{ marginTop: "75px" }}>
                <div className="mx-3 my-3"> 
                    <h1 className="text-center">PROFILE PAGE</h1>                 
                </div>
            </div>
        </>
    );
}

export default HomePage;

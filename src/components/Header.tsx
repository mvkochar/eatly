import { Link } from 'react-router-dom'
import './css/Header.css'
import { SignModal } from './'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div><Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><Link to="/menu">Menu</Link></li>
                    <li className="header-nav-item"><Link to="/blog">Blog</Link></li>
                    <li className="header-nav-item"><Link to="/pricing">Pricing</Link></li>
                    <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <SignModal />
        </header>
    )
}

export default Header
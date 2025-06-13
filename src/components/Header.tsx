import './css/Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div className="d-f align-center">
            <div><img src="/images/logo.svg" alt="Logo" /></div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item"><a href="">Menu</a></li>
                    <li className="header-nav-item"><a href="">Blog</a></li>
                    <li className="header-nav-item"><a href="">Pricing</a></li>
                    <li className="header-nav-item"><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div className="header-actions d-f align-center">
            <button className='login-btn d-b'>Login</button>
            <button className='sign-btn d-b'>Sign up</button>
        </div>
    </header>
  )
}

export default Header
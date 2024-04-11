import { NavLink } from 'react-router-dom'
// import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from './icons'

const Header = () => {
  return (
    <header className='p-4 md:p-0 my-5'>
      <ul className='grid grid-flow-col justify-items-start justify-center  font-medium border mx-14 border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
        <li>
          <NavLink
            to='/'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            {' '}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/register'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin'
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </header>
    // <header className='header'>
    //   <div className='container'>
    //     <div className='header-inner'>
    //       <Link to='/' className='header__logo'>
    //         <img src={Logo} alt='#' />
    //       </Link>
    //       <div className='button-mobile'>
    //         <button>=</button>
    //       </div>
    //       <nav className='main-menu'>
    //         <ul className='main-menu__list'>
    //           <li className='main-menu__item'>
    //             <NavLink to='/' className='main-menu__link'>
    //               Home
    //             </NavLink>
    //           </li>
    //           <li className='main-menu__item'>
    //             <NavLink to='/shop' className='main-menu__link'>
    //               Shop
    //             </NavLink>
    //           </li>
    //           <li className='main-menu__item'>
    //             <NavLink to='/about' className='main-menu__link'>
    //               About
    //             </NavLink>
    //           </li>
    //           <li className='main-menu__item'>
    //             <NavLink to='/contact' className='main-menu__link'>
    //               Contact
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className='header-items'>
    //         <div className='header-item-user'>
    //           <span>
    //             <img src={UserIcon} />
    //           </span>
    //         </div>
    //         <div className='header-item-user'>
    //           <span>
    //             <img src={SearchIcon} />
    //           </span>
    //         </div>
    //         <div className='header-item-user'>
    //           <span>
    //             <img src={WishlistIcon} />
    //           </span>
    //         </div>
    //         <div className='header-item-user'>
    //           <span>
    //             <img src={CartIcon} />
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Header

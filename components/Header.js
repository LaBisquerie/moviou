import React from 'react'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  return (
    <div className='header'>
      <div className='header-mobile d-block d-md-none'>
        <button class="btn header-mobile__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <AiOutlineMenu />
        </button>
      </div>
      <div className="header-left d-none d-md-flex">
        <ul className='header-menu__list'>
          <li className="header-menu__list-item">
            <Link href="/">
              <a className="header-menu__list-link">Accueil</a>
            </Link>
          </li>
          <li className="header-menu__list-item">
            <Link href="/categories">
              <a className="header-menu__list-link">Catégories</a>
            </Link>
          </li>
          <li className="header-menu__list-item">
            <Link href="/">
              <a className="header-menu__list-link">Shop</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-logo">
        <Link href="/">
          <a>
            <img src="https://res.cloudinary.com/drxtvqede/image/upload/v1654526865/L_%C3%89glise_de_dj4coe.png" alt="logo" width="100" height="100" />
          </a>
        </Link>
      </div>
      <div className="header-right d-none d-md-flex">
        <ul className="header-menu__list">
          <li className="header-menu__list-item">
            <Link href="/">
              <a className="header-menu__list-link">A propos</a>
            </Link>
          </li>
          <li className="header-menu__list-item">
            <Link href="/">
              <a className="header-menu__list-link">Contact</a>
            </Link>
          </li>
          <li className="header-menu__list-item">
            <Link href="/">
              <a className="header-menu__list-link">Connexion</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='header-mobile__login d-block d-md-none'>
        <Link href="/">
          <a className='header-menu__list-link'>
            Connexion
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
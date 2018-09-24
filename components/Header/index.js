import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from '../ActiveLink'

import './styles.scss'
import TicketMenu from '../TicketMenu'

import config from '../../config/config'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render () {
    return (

      <header className='ga-header'>
        <nav className='navbar has-background-primary'>
          <div className='navbar-brand'>
            <Link href='/'>
              <a>
                <img src='/static/img/logo-100x100.png' />
              </a>
            </Link>
            <button className='button navbar-burger is-dark' onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={classNames('navbar-menu', 'has-background-primary', 'has-text-centered', { 'is-active': this.state.isOpen })} >
            <div className='navbar-start' />
            <div className='navbar-item'>
              <ActiveLink label='Actualités' className='has-text-black is-uppercase has-text-weight-bold' path='/news' />
            </div>
            <TicketMenu />
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Tournois' className='has-text-black' path='/tournois' />
            </div>
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Infos pratiques' className='has-text-black' path='/infos' />
            </div>
            <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label='Partenaires' className='has-text-black' path='/partenaires' />
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                {config.social && <div className='field is-grouped'>
                  {config.social.facebook && <a className='control has-text-black' target='_blank' href={config.social.facebook}>
                    <i className='fab fa-facebook' />
                  </a>}
                  {config.social.twitter && <a className='control has-text-black' target='_blank' href={config.social.twitter}>
                    <i className='fab fa-twitter' />
                  </a>}
                  {config.social.flickr && <a className='control has-text-black' target='_blank' href={config.social.flickr}>
                    <i className='fab fa-flickr' />
                  </a>}
                  {config.social.twitch && <a className='control has-text-black' target='_blank' href={config.social.twitch}>
                    <i className='fab fa-twitch' />
                  </a>}
                  {config.social.youtube && <a className='control has-text-black' target='_blank' href={config.social.youtube}>
                    <i className='fab fa-youtube' />
                  </a>}
                </div>}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

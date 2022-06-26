import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import routes from '../../../../config/routes'
import styles from './Header.module.scss'
import images from '../../../../assets/images'
import Button from '../../../Button'
import Menu from '../../../Popper/Menu'
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    SettingIcon,
    UserIcon,
} from '../../../Icon'
import Image from '../../../Image'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard hortcuts',
    },
]

function Header() {
    const currentUser = true

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@taiphuoctran123',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />
                
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Login</Button>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7100465603571351558~c5_720x720.jpeg?x-expires=1654344000&x-signature=ZUju4CFXJ7jG8cbVqJPmCa58w1k%3D"
                                alt="user-avatar"
                                fallback='https://lh3.googleusercontent.com/a-/AOh14GhqTT_DnYylPPtS_OOaYsdovq7kSs743RNcGZ8YjA=s83-c-mo'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header

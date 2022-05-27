import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../../../Popper'
import 'tippy.js/dist/tippy.css'
import styles from './Header.module.scss'
import images from '../../../../assets/images'
import AccountItem from '../../../AccountItem'
import Button from '../../../Button'

const cx = classNames.bind(styles)

function Header() {
	const [searchResult, setSearchResult] = useState([])

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 4])
		}, 0)
	}, [])

	return (
		<header className={cx('wrapper')}>
			<div className={cx('content')}>
				<img src={images.logo.default} alt="Tiktok" />
				<Tippy
          interactive
					visible={searchResult.length > 0}
					render={(attrs) => (
						<div className={cx('search-result')} tabIndex="-1" {...attrs}>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Accounts</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input placeholder="Search accounts and videos" spellCheck={false} />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<button className={cx('loading')}>
							<FontAwesomeIcon icon={faSpinner} />
						</button>
						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</Tippy>
				<div className={cx('actions')}>
					<Button text leftIcon={<FontAwesomeIcon icon={faPlus}/>}>Upload</Button>
					<Button outline>Login</Button>
				</div>
			</div>
		</header>
	)
}

export default Header

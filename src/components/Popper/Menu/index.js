import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import MenuItem from './MenuItem'
import Header from './Header'
import styles from './Menu.module.scss'
import Wrapper from '../Wrapper'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <Tippy
                delay={[0, 700]}
                // offset={[16, 8]}
                interactive
                placement="bottom-end"
                hideOnClick={hideOnClick}
                onHide={() => setHistory(prev => prev.slice(0,1))}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('menu-popper')}>
                            {history.length > 1 && 
                                <Header 
                                    title={current.title} 
                                    onBack={() => {
                                        setHistory(prev => prev.slice(0, prev.length-1))
                                    }}
                                />
                            }
                            <div className={cx('menu-body')}>
                                {renderItems()}
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu

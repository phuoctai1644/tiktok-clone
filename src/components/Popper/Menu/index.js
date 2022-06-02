import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import MenuItem from './MenuItem'
import Header from './Header'
import styles from './Menu.module.scss'
import Wrapper from '../Wrapper'
import { useState } from 'react'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], onChange = defaultFn }) {
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
        <Tippy
            delay={[0, 700]}
            // offset={[16, 8]}
            interactive
            placement="bottom-end"
            onHide={() => setHistory(prev => prev.slice(0,1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length-1))
                        }}/>}
                        {renderItems()}
                    </Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu

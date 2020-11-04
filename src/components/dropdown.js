import { useState, useRef, useEffect } from "react"

import "./dropdown.scss"

const Dropdown = ({ activatorText = 'Dropdown', items = [] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const activatorRef = useRef(null)
    const dropdownListRef = useRef(null)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }
    const wrapKeyHandler = (event) => {
        if (event.key === 'Escape' && isOpen) {
            // escape key
            setIsOpen(false)
            activatorRef.current.focus()
        }
    } 
    const clickOutsideHandler = (event) => {
        if (dropdownListRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen()
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mouseup', clickOutsideHandler)

            if (items.length) {
                dropdownListRef.current.querySelector('a').focus()
            }
        } else {
            document.removeEventListener('mouseup', clickOutsideHandler)
        }

        return () => {
            document.removeEventListener('mouseup', clickOutsideHandler)
        }
    }, [isOpen])
    return (
        <div
            className="dropdown-wrap"
            onKeyUp={wrapKeyHandler}
        >
            <button
                aria-haspopup="true"
                aria-controls="dropdown1"
                onClick={clickHandler}
                className="dropdown-activator"
                ref={activatorRef}
                data-testid="dropdown-activator"
            >
                {activatorText}
            </button>
            <ul
                id="dropdown1"
                ref={dropdownListRef}
                tabIndex="-1"
                className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
                role="list"
                data-testid="dropdown-itemList"
            >
                {items.map((item, index) => {
                    return <li key={index} role="listitem">
                        <a href={item.url}>
                            {item.text}
                        </a>
                    </li>
                })}
                { items.length === 0 ? <li>No items</li> : null }
            </ul>
        </div>
    )
}
export default Dropdown

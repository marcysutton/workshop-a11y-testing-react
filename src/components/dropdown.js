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
            onKeyUp={wrapKeyHandler}
            className={`dropdown ${isOpen ? 'active' : ''}`}
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
                <span className="icon" aria-hidden="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.751 55.751" focusable="false">
                        <g>
                            <path d="M31.836,43.006c0.282-0.281,0.518-0.59,0.725-0.912L54.17,20.485c2.107-2.109,2.109-5.528,0-7.638
                            c-2.109-2.107-5.527-2.109-7.638,0l-18.608,18.61L9.217,12.753c-2.109-2.108-5.527-2.109-7.637,0
                            C0.527,13.809-0.002,15.19,0,16.571c-0.002,1.382,0.527,2.764,1.582,3.816l21.703,21.706c0.207,0.323,0.445,0.631,0.729,0.913
                            c1.078,1.078,2.496,1.597,3.91,1.572C29.336,44.604,30.758,44.084,31.836,43.006z" />
                        </g>
                    </svg>
                </span>
            </button>
            <ul
                className="dropdown-list"
                id="dropdown1"
                ref={dropdownListRef}
                tabIndex="-1"
                role="list"
                data-testid="dropdown-list"
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

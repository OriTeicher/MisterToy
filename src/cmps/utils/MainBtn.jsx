import React from "react"

export default function ({ classProp, onClickFunc, btnContent }) {
    return (
        <button className={`main-btn ${classProp}`} onClick={onClickFunc}>
            {btnContent}
        </button>
    )
}

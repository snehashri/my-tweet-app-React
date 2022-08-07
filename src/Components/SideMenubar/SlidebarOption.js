import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon,navigate }) {
    return (
        <div className = {`sidebarOption ${active && 'sidebarOption--active' }`}> 
            <Icon />
            <h2><a href={navigate}>{text}</a></h2>
            
        </div>
    )
}

export default SidebarOption

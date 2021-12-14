import React from "react"

export default function Header() {
    return (
     <div className="header">
         <div className="image-div">
             <img src="../images/mario.jpg" alt="" className="image"/>
         </div>
         <div className="name-div">
             <h1 className="name">Mario Erichsen</h1>
         </div>
     </div>
    )
}
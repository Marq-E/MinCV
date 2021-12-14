import React from "react"
import Info from "./Info"
import KeyQualifications from "./KeyQualifications"
import WorkExperience from "./WorkExperience"
import References from "./References"

export default function Main() {
    return (
        <div className="main">
            <Info />
            <div className="Key-info-div">
                <KeyQualifications />
                <WorkExperience />
                <References />
            </div>
        </div>
    )
}
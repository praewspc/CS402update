import React from 'react';

import {Row , Col} from 'react-bootstrap';

import { FaFilePdf } from "react-icons/fa";
function BlockHome(){
    return (
        <div className="rightblock">

            <div className="blockwhite">
                
                <div classname="block top">
                    
                </div>

                <div className="block1">
                    <p className="hello">Hello, Phurit</p>
                </div>

                <div className="block2">
                    <p className="welcome">Welcome back</p>
                </div>

                <div>
                    <span class="a">
                        <div className="paragraph1">
                        <p className="cs">CS401 / CS402</p>
                        <p className="cs1">วิชาบังคับก่อนศึกษา: </p>
                        </div>

                    <div className="paragraph2">
                        <p className="cs2">คำอธิบายรายวิชา: </p>
                    </div>

                    <div className="paragraph3">
                        <p className="cs3">ผู้ประสานงาน: </p>
                    </div>
                    </span> 

                    <span class="b">
                        
                    
                    </span>
                </div>
                    
                <div classname="pdf1">
                    <FaFilePdf size={26}/>
                    <p>CS401 1-63 Course Syllabusfile</p>
                    
                </div>
                <div classname="pdf1">
                    <FaFilePdf size={26} />
                    <p>CS402 1-63 Course Syllabusfile</p>
                    
                </div>

                
            </div>
            
            
            
        </div>
        
    )
}

export default BlockHome;
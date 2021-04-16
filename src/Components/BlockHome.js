import React from 'react';
import { Row, Col } from 'react-bootstrap';


function BlockHome() {
    return (
        <div className="rightblockhome">
            <div className="blockwhitehome">

                <div classname="block top">
                    <Row classname="blueblue">
                        <Col>
                            <div className="block1">
                                <p className="hello">Hello, Phurit</p>
                            </div>

                            <div className="block2">
                                <p className="welcome">Welcome back</p>
                            </div>


                        </Col>
                        {/* <Col>
                            <div className="block3">
                                <FaSearch />
                                <p classname="Phurit">Phurit Apichonlati</p>
                            </div>
                        </Col> */}
                    </Row>
                </div>



                <div>
                    <div class="a">
                        <div className="paragraph1">
                            <p className="cs">CS401 / CS402</p>
                            <p className="cs1">วิชาบังคับก่อนศึกษา: 
                                <span className="cs1-1">สําหรับนักศึกษาตั้งแต่ชั้นปีที่ 4 ขึ้นไป และ สอบได้ระดับ S ในรายวิชา คพ.300 และเคยศึกษา คพ.301</span>
                            </p>
                            
                        </div>

                        <div className="paragraph2">
                            <p className="cs2">คำอธิบายรายวิชา: 
                                <span className="cs2-1"> โครงงานการศึกษาจะกําหนดหรือได้รับอนุมัติจากภาควิชา ศึกษาหัวข้อทางวิชาการ โดยมีวัตถุประสงค์ให้นักศึกษาค้นคว้าทางวิชาการ เขียนรายงาน และเสนอต่อคณะกรรมการ
                                                            Senior Projects Will Be Assigned Or Approved By The Department. This Course Prepares Students For Developing A Proposal For Doing Research, Writing Research Papers, And Presenting The Proposal To The Committee.</span>
                            </p>
                        </div>

                        <div className="paragraph3">
                            <p className="cs3">ผู้ประสานงาน: 
                                <span className="cs3-1">อาจารย์ นุชชากร งามเสาวรส (FB: Nutchakorn Ngam)</span>
                                <span className="cs3-2">อาจารย์ ดร.วนิดา พฤทธิวิทยา (Wanidap@Cs.Tu.Ac.Th)</span>
                                
                            </p>
                            
                        </div>

                         
                    </div>
                    
                    {/* <div class="b">
                            ge;rh

                    </div> */}
                   
                </div>

                <div classname="pdf1">
                    
                </div>


            </div>

        </div>

    )
}

export default BlockHome;
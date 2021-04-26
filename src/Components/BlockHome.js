import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css'

function BlockHome() {
    return (
        <div className="rightblockhome">
            <div className="blockwhitehome">
                <Row className="blocktop">
                    <Col >
                        <div className="block1">
                            <p className="hello">Hello, Phurit</p>
                        </div>

                        <div className="block2">
                            <p className="welcome">Welcome back</p>
                        </div>

                        <div class="a">
                            <p className="cs">CS401 / CS402</p>
                            <div className="paragraph1">
                                <p className="cs1">วิชาบังคับก่อนศึกษา:
                                <span className="cs1-1">สําหรับนักศึกษาตั้งแต่ชั้นปีที่ 4 ขึ้นไป และ สอบได้ระดับ S ในรายวิชา คพ.300 และเคยศึกษา คพ.301</span>
                                </p>

                            </div>

                            <div className="paragraph2">
                                <p className="cs2">คำอธิบายรายวิชา:
                                <span className="cs2-1"> โครงงานการศึกษาจะกําหนดหรือได้รับอนุมัติจากภาควิชา ศึกษาหัวข้อทางวิชาการ โดยมีวัตถุประสงค์ให้นักศึกษาค้นคว้าทางวิชาการ เขียนรายงาน และเสนอต่อคณะกรรมการ</span>
                                <span className="cs2-1"> Senior Projects Will Be Assigned Or Approved By The Department. This Course Prepares Students For Developing A Proposal For Doing Research, Writing Research Papers, And Presenting The Proposal To The Committee.</span>
                                </p>
                            </div>

                            <div className="paragraph3">
                                <p className="cs3">ผู้ประสานงาน:
                                <span className="cs3-1">อาจารย์ นุชชากร งามเสาวรส (FB: Nutchakorn Ngam)</span>
                                    <div className="cs3-2">อาจารย์ ดร.วนิดา พฤทธิวิทยา (Wanidap@Cs.Tu.Ac.Th)</div>

                                </p>

                            </div>
                        </div>

                    </Col>


                </Row>
                <Row className="blocktop2">
                    <Col >
                        <div className="block1">
                        {/* <i class="fas fa-search"></i> */}
                            <p className="hello">Phurit</p>
                        </div>
                        {/* <div className="block2">
                            <p className="welcome">Welcome back</p>
                        </div> */}

                        <div class="b">
                            <div className="month">
                                JANUARY 2021
                            </div>

                            <Row className="Day">
                                <span className="Sunday">Sun</span>
                                <span className="Monday">Mon</span>
                                <span className="Tuesday">Tue</span>
                                <span className="Wednesday">Wed</span>
                                <span className="Thursday">Thr</span>
                                <span className="Friday">Fri</span>
                                <span className="Saturday">Sat</span>

                            </Row>
                            
                            <hr className="hr-month"></hr>

                            <Row className="one">
                                <span className="dec27">27</span>
                                <span className="dec28">28</span>
                                <span className="dec29">29</span>
                                <span className="dec30">30</span>
                                <span className="dec31">31</span>
                                <span className="jan1">1</span>
                                <span className="jan2">2</span>
                            </Row>

                            <Row className="two">
                                <span className="jan3">3</span>
                                <span className="jan4">4</span>
                                <span className="jan5">5</span>
                                <span className="jan6">6</span>
                                <span className="jan7">7</span>
                                <span className="jan8">8</span>
                                <span className="jan9">9</span>
                            </Row>

                            <Row className="three">
                                <span className="jan10">10</span>
                                <span className="jan">11</span>
                                <span className="jan">12</span>
                                <span className="jan">13</span>
                                <span className="jan">14</span>
                                <span className="jan15">15</span>
                                <span className="jan16">16</span>
                            </Row>

                            <Row className="four">
                                <span className="jan17">17</span>
                                <span className="jan">18</span>
                                <span className="jan">19</span>
                                <span className="jan">20</span>
                                <span className="jan">21</span>
                                <span className="jan22">22</span>
                                <span className="jan23">23</span>
                            </Row>

                            <Row className="five">
                                <span className="jan24">24</span>
                                <span className="jan">25</span>
                                <span className="jan">26</span>
                                <span className="jan">27</span>
                                <span className="jan">28</span>
                                <span className="jan29">29</span>
                                <span className="jan30">30</span>
                            </Row>

                            <Row className="six">
                                <span className="jan31">31</span>
                                <span className="feb1">1</span>
                                <span className="feb2">2</span>
                                <span className="feb">3</span>
                                <span className="feb4">4</span>
                                <span className="feb5">5</span>
                                <span className="feb6">6</span>
                            </Row>

                        </div>

                    </Col>

                
                </Row>
            </div>

        </div>

    )
}

export default BlockHome;
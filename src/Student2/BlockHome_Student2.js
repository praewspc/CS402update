import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css'
import praew1 from '../assets/praew1.jpg';

export const BlockHome_Student2 = () => {

    return (
        <div className="rightblockhome">
            <div className="blockwhitehome">
                <Row className="blocktop">
                <Col >
                        <div className="block1">
                            <p className="hello">Hello, Supitcha</p>
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
                                    <div className="cs3-2">ผศ. ดร.วนิดา พฤทธิวิทยา (wanidap@cs.tu.ac.th)</div>

                                </p>

                            </div>
                        </div>

                        <Row className="pdf">
                            <span className="pdf1-1"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></span>
                            <span className="pdf1-2">
                                <a href="https://drive.google.com/file/d/1g0_SuPkRHYAcsK8ELNg7X1RRLp081Iwp/view?usp=sharing" class="text-decoration-none">CS401 1-63 Course Syllabusfile</a> 
                            </span>
                        </Row>

                        <Row className="pdf2">
                            <span className="pdf2-1"><i class="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></span>
                            <span className="pdf2-2">
                                <a href="https://drive.google.com/file/d/1yiirU8v1ETAjeDN2cbja5cJeZLyJdAIK/view?usp=sharing">CS402 1-63 Course Syllabusfile</a>
                            </span>
                        </Row>

                        <hr className="hr-pdf"></hr>

                        <p className="form-home">ฟอร์มสำหรับแจ้งข้อมูลต่าง ๆ</p>

                        <Row className="pdf3">
                            <span className="pdf2-1"><i class="fa fa-file-text fa-2x" aria-hidden="true"></i></span>
                            <span className="pdf3-2">
                                <a href="/project_inform2">คลิกที่นี่เพื่อแจ้งข้อมูลเกี่ยวกับโครงงานวิชา คพ.401 และ คพ.402 ปีการศึกษา 2563 </a>
                            </span>
                            <div className="pdf3-3">Available Until 15 October 2020, 11:55 Pm</div>
                        </Row>

                        <Row className="pdf4">
                            <span className="pdf2-1"><i class="fa fa-file-text fa-2x" aria-hidden="true"></i></span>
                            <span className="pdf2-2">
                               
                            <a href="/time2">
                                    คลิกที่นี่เพื่อแจ้งตารางสอบปลายภาค ภาคเรียนที่ 1 ปีการศึกษา 2563 (ต้องกรอกข้อมูลนี้ทุกคน)    
                                </a>  
                                
                            </span>
                            <div className="pdf3-3">Available Until 31 October 2020, 11:55 Pm</div>
                        </Row>
                        
                    </Col>


                </Row>
                <Row className="blocktop2">
                    <Col >
                    <Row className="block123">
                            
                            {/* <span className="search"><i class="fa fa-search fa-2x" aria-hidden="true"></i> </span> */}
                            
                            {/* <span className="search"><i class="fa fa-search fa-2x" aria-hidden="true"></i> </span> */}
                            
                            <span className="stuname">Supitcha Ratanatrimas</span>

                            <span><img className="pichome" src={praew1} alt=""/></span>
                           
                        </Row>
                        

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

                        <p className="noti-home">Notification </p>

                        <div className="c">
                            <p className="noti1">First Meet: Online Meeting Via Cisco Webex</p>
                            <div className="noti1-1">
                                <span><i class="fa fa-calendar-o fa-1x" aria-hidden="true"></i></span>
                                <span className="noti2">Thursday 12, 2020</span>
                            </div>
                           <div className="noti1-1">
                               <span><i class="fa fa-clock-o fa-1x" aria-hidden="true"></i></span>
                               <span className="noti3">12.40 - 13.20 PM</span>
                           </div>
                            
                        </div>

                        <div className="d">
                            <p className="noti1">First Meet: Online Meeting Via Cisco Webex</p>
                            <div className="noti1-1">
                                <span><span><i class="fa fa-calendar-o fa-1x" aria-hidden="true"></i></span></span>
                                <span className="noti2">Thursday 12, 2020</span>
                            </div>
                           <div className="noti1-1">
                               <span><i class="fa fa-clock-o fa-1x" aria-hidden="true"></i></span>
                               <span className="noti3">12.40 - 13.20 PM</span>
                           </div>
                        </div>

                    </Col>

                
                </Row>
            </div>

        </div>

    )
}

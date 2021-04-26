import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import TextField from '@material-ui/core/TextField';
import Button from "react-bootstrap/Button";
// import './NewitemsForm.css';
import Figure from "react-bootstrap/Figure";
import pooh1 from '../assets/pooh1.jpg' ;
function BlockSetting(){
    return (
        <div className="rightblocksetting">
            <div className="blockwhitesetting">
                <h1 className="Topname">Setting</h1>
                <div>
                    <img className="img-thumbnail" src={pooh1} alt=""/>
                   
                </div>

                
                {/* <form>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                </form> */}

            </div>
        </div>
    );
}

export default BlockSetting;
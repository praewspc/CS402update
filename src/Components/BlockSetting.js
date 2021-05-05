import React from 'react';
// import './NewitemsForm.css';
import pooh2 from '../assets/pooh2.jpg' ;
function BlockSetting(){
    return (
        <div className="rightblocksetting">
            <div className="blockwhitesetting">
                <h1 className="TopnameSetting">Setting</h1>

                <hr className="hr-setting"></hr>
                <div>
                    <img className="img-thumbnail" src={pooh2} alt=""/>
                   
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
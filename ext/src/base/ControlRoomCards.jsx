import { Card, Inline, Stack } from '@shopify/polaris';
import React from 'react';
import yotpo from '../logos/yotpo.png'
import play from '../images/play.png'
import check from '../images/check.png'
import snooze from '../images/snooze.png'
import dots from '../images/3dots.png'

const ControlRoomCards = () => {
    return (
        <div>
            <Card  >
                <Inline className="ControlCards">
                    <div className='leftPanel backgroundRed'></div>
                    <div className='innerCard'>
                       <img src={yotpo} alt="yotpo" width={"53px"} height={"14px"} />
                        <div className='ActionDetail'>
                            <h1 className='critical'>CRITICAL</h1>
                            <h2>Setup a call with Customer</h2>
                            <div className='innerText'>Adoption achived, identified positive sentiment</div>
                            <div className='actionButtons'>
                                <div className='rightSide'>
                                <img src={play} alt="play" width={"26px"} height={"26px"} />
                                <img src={check} alt="check" width={"26px"} height={"26px"} />
                                <img src={snooze} alt="snooze" width={"26px"} height={"26px"} />
                                <img src={dots} alt="dots" width={"26px"} height={"26px"} />
                            
                                </div>
                            </div>
                            <div className='dueDate'>
                                <h1>DUE DATE</h1>
                                <div className='red'>1 day left</div>
                            </div>
                        </div>
                    </div>
                </Inline>

            </Card>
            <Card className="ControlCards" >
                <div className='leftPanel backgroundOrange'></div>
            </Card>
        </div>

    );
}

export default ControlRoomCards
import { Card, Inline } from '@shopify/polaris';
import React from 'react';
import YotpoLogo from '../logos/yotpo';
import sadFace from '../images/sad.png'

const ControlRoomCards = () => {
    return (
        <div>
            <Card className="ControlCards" >
                <Inline>
                    <div className='leftPanel backgroundRed'></div>
                    <div className='CardLogo'>
                        <YotpoLogo />
                    </div>
                    <div className='ActionDetail'>
                        <h1>CRITICAL</h1>
                        <h2>Setup a call with Customer</h2>
                        <div>Adoption achived, identified positive sentiment</div>
                    </div>
                    <div className='sentimentCard'>
                        <div>SENTIMENT</div>
                        <div className='space'> - </div>
                        <div>ARR</div>
                        <div className='break'></div>
                        <div><img src={sadFace} alt="sad face"/></div>
                        <div className='space'> - </div>
                        <div>$380K</div>
                            
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
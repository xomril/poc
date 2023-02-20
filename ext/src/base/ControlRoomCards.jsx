import { Card, Inline } from '@shopify/polaris';
import React, { useState, useEffect } from 'react';
import yotpo from '../logos/yotpo.png'
import play from '../images/play.png'
import check from '../images/check.png'
import snooze from '../images/snooze.png'
import dots from '../images/3dots.png'

const ControlRoomCards = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:3001/control-room/actions');
        const json = await response.json();
        setData(json);
    };

    return (
        <div>

            {data && (
                <div>
                    {data.map((item) => (
                         <Card  >
                         <Inline className="ControlCards">
                             <div className='leftPanel backgroundRed'></div>
                             <div className='innerCard'>
                                 <img src={yotpo} alt="yotpo" width={"53px"} height={"14px"} />
                      
                                 <div className='ActionDetail'>
                                     <h1 className='critical'>{item.customer.sentiment}</h1>
                                     <h2>{item.playbook.name}</h2>
                                     <div className='innerText'>{item.playbook.stepName}</div>
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
                    ))}
                </div>
            )}

            
        </div>

    );
}

export default ControlRoomCards
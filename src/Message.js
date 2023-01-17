import React, { useEffect, useState } from 'react';
import { getMessage } from './services/service';

const Message = () => {
    const [message, setMessage] = useState("");
    useEffect(()=>{
        getMessage().then((res) => {
            setMessage(res.data);
        })
    },[])
    return (
        <div>
            {message}
        </div>
    );
};

export default Message;
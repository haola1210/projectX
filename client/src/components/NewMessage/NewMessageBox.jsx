import React from 'react';
import NewMessageItem from './NewMessageItem';

function NewMessageBox(props) {
    const a = Array.from(Array(14).keys())

    return (
        // style={{ maxHeight : `calc(100vh - 170px)` }}
        <div className="absolute w-full flex-grow " >
            {
                a.map((i, id) => (
                    <NewMessageItem key={id} friendName="Ervin Howell Ervin Howell Ervin Howell Ervin Howell Ervin Howell Ervin Howell" time="1 giờ" content="Xin chào Hào, bạn khỏe chứ ? Xin chào Hào, bạn khỏe chứ ? Xin chào Hào, bạn khỏe chứ ?" />
                ))
            }
            


        </div>
    );
}

export default NewMessageBox;
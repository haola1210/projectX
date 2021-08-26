import React from 'react';
import NewMessageItem from './NewMessageItem';

function NewMessageBox(props) {
    const a = Array.from(Array(14).keys())

    return (
        <div className="w-full flex flex-col overflow-y-auto"  style={{ maxHeight : `calc(100vh - 170px)` }}>
            {
                a.map((i, id) => (
                    <NewMessageItem key={id} friendName="Ervin Howell Ervin Howell Ervin Howell Ervin Howell Ervin Howell Ervin Howell" time="1 giờ" content="Xin chào Hào, bạn khỏe chứ ? Xin chào Hào, bạn khỏe chứ ? Xin chào Hào, bạn khỏe chứ ?" />
                ))
            }
            


        </div>
    );
}

export default NewMessageBox;
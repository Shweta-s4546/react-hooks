import React, { memo } from 'react'

const MarkInfo = memo((props) => {
    return(
        <div className="row">
           <h6 className="display-3 text-success">{props.info.result}</h6>
        </div>
    )
});
export default MarkInfo

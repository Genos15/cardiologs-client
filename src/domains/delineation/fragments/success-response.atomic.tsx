import React from "react"
import { HeartRateBoundary } from "../delineation.model"
import QRSHeartRateAtomic from "./qrs-internal.atomic"

const SuccessResponseAtomic: React.FC<HeartRateBoundary> = ({meanHeartRate, minHeartRate, maxHeartRate}) => {
    return <div data-testid="success-block">
        <div>
            <h3>Mean heart rate</h3>
            <div>Rate: {meanHeartRate.toFixed(2)}</div>
        </div>
        <hr/>
        {minHeartRate && <QRSHeartRateAtomic {...minHeartRate}/>}
        <hr/>
        {maxHeartRate && <QRSHeartRateAtomic {...maxHeartRate}/>}
    </div>
}


export default SuccessResponseAtomic

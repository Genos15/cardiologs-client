import React from "react"
import { fromTimestampToDateString } from "src/shared/date.utils"
import { QRSHeartRate } from "../delineation.model"

const QRSHeartRateAtomic: React.FC<QRSHeartRate> = ({heartRateBpm: interval, onsetTimestamp, offsetTimestamp}) => {
    return (
        <div>
            <h3>Maximum heart rate</h3>
            <div>Rate: {interval.toFixed(2)}</div>
            <div>From: {fromTimestampToDateString(onsetTimestamp)}</div>
            <div>To: {fromTimestampToDateString(offsetTimestamp)}</div>
        </div>
    )
}

export default QRSHeartRateAtomic

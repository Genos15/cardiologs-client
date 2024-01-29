export type QRSHeartRate = {
    heartRateBpm: number
    onsetTimestamp: number
    offsetTimestamp: number
}

export type HeartRateBoundary = {
    meanHeartRate: number,
    minHeartRate: QRSHeartRate | null
    maxHeartRate: QRSHeartRate | null
}

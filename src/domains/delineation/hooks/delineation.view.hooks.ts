import { useState } from "react";
import { NetworkStatus } from "src/shared/definition";
import { HeartRateBoundary } from "../delineation.model";
import { postDelineation } from "../delineation.service";

export function useAnalyzeECGFile() {
  const [networkStatus, setNetworkState] = useState<NetworkStatus>("idle")
  const [heartRateBoundary, setHeartRateBoundary] = useState<
    HeartRateBoundary | undefined
  >(undefined)

  const sendDelineation = async (file: File, timestamp?: number) => {
    try {
      setNetworkState("loading")
      const boundary = await postDelineation(file, timestamp)
      setHeartRateBoundary(boundary)
      setNetworkState("success")
    } catch (error) {
      setNetworkState("error")
    }
  }

  return {
    networkStatus,
    heartRateBoundary,
    sendDelineation,
  }
}

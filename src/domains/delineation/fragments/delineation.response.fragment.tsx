import React from "react" 
import { ResponseBlock } from "../delineation.style"
import { HeartRateBoundary } from "../delineation.model"
import SuccessResponseAtomic from "./success-response.atomic"
export type DelineationResponseViewProps = {
    status: 'error'
    errorMessage: string
} | {
    status: 'success'
    heartRateBoundary: HeartRateBoundary
}

const DelineationResponseFragment: React.FC<DelineationResponseViewProps> = (props) => {

    return (
        <ResponseBlock $status={props.status}>
            {props.status === 'success' && <SuccessResponseAtomic {...props.heartRateBoundary} />}

            {props.status === 'error' && <div data-testid="error-block">Error: {props.errorMessage}</div>}
        </ResponseBlock>
    )
}


export default React.memo(DelineationResponseFragment)

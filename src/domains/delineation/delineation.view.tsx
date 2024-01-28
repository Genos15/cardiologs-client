import React from "react" 
import { Container } from "./delineation.model";
import { DelineationForm } from "./fragments/delineation.form";
import DelineationResponseView from "./fragments/delineation.response.view";
import { useAnalyzeECGFile } from "./hooks/delineation.view.hooks";


export const DelineationView: React.FC = () => {

    const {networkStatus, heartRateBoundary, sendDelineation} = useAnalyzeECGFile()

    return (
        <Container>
            <h2>Delineation</h2>
            <DelineationForm onSubmit={sendDelineation}/>
            <div className={'result-block'}>
                {networkStatus === 'loading' && <div data-testid="loading-block">loading...</div>}
                {networkStatus === 'success' &&
                    <DelineationResponseView status={'success'} heartRateBoundary={heartRateBoundary!}/>
                }
                {networkStatus === 'error' &&
                    <DelineationResponseView status={'error'} errorMessage={'Something went wrong'}/>
                }
            </div>
        </Container>
    )
}

import React from "react" 
import { Container } from "./delineation.style"
import { DelineationForm } from "./fragments/delineation.form"
import DelineationResponseFragment from "./fragments/delineation.response.fragment"
import { useAnalyzeECGFile } from "./hooks/delineation.view.hooks"


export const DelineationView: React.FC = () => {

    const {networkStatus, heartRateBoundary, sendDelineation} = useAnalyzeECGFile()

    return (
        <Container>
            <h2>Delineation</h2>
            <DelineationForm onSubmit={sendDelineation}/>
            <div className={'result-block'}>
                {networkStatus === 'loading' && <div data-testid="loading-block">loading...</div>}
                {networkStatus === 'success' &&
                    <DelineationResponseFragment status={'success'} heartRateBoundary={heartRateBoundary!}/>
                }
                {networkStatus === 'error' &&
                    <DelineationResponseFragment status={'error'} errorMessage={'Something went wrong'}/>
                }
            </div>
        </Container>
    )
}

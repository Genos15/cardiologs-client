import styled, {css} from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 600px;
    gap: 1rem;
    margin: 1rem auto;
    position: relative;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 1rem;
`

export const Button = styled.button<{ $disabled?: boolean; }>`
    display: block;
    color: #BF4F74;
    font-size: 1rem;
    padding: 1rem;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    width: 100%;

    &:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }

    ${props => props.$disabled === true && css`
        pointer-events: none;
        border: none;
        color: #343a40;
    `}
`

export const FormControl = styled.div`
    text-align: start;
`

export const Input = styled.input`
    display: block;
    padding: 1rem;
    color: #BF4F74;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;

    &::file-selector-button {
        display: none;
    }
`

export const ResponseBlock = styled.div<{ $status: 'success' | 'error' }>`
    display: block;
    padding: 1rem;
    width: 100%;
    text-align: start;

    ${props => props.$status === 'success' && css`
        background-color: #7be4a5;
    `}

    ${props => props.$status === 'error' && css`
        background-color: #da5869;
    `}
`

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

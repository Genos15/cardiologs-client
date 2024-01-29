import React, {FormEvent} from "react"
import { useEcgFormState } from "../hooks/delineation.form.hooks"
import { Form, FormControl, Input, Button } from "../delineation.style"

export interface DelineationFormProps {
    onSubmit: (ecgFile: File, ecgTimestamp?: number) => void;
}

export const DelineationForm: React.FC<DelineationFormProps> = ({onSubmit}) => {

    const {
        ecgDatetime,
        ecgFile,
        submitDisabled,
        changeEcgFile,
        changeEcgDate
    } = useEcgFormState()

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let ecgTimestamp: number | undefined

        if (!!ecgDatetime) {
            ecgTimestamp = new Date(ecgDatetime).getTime()
        }

        onSubmit(ecgFile!, ecgTimestamp)
    }

    return (
        <Form onSubmit={submitForm}>
            <FormControl>
                <label htmlFor="ecgFile">Pick ECG file (required)</label>
                <Input type="file" name="ecgFile" onChange={changeEcgFile} required accept="text/csv" data-testid="file-input"/>
            </FormControl>
            <FormControl>
                <label htmlFor="ecgDate">Choose corresponding date</label>
                <Input type="datetime-local" name="ecgDate" value={ecgDatetime} onChange={changeEcgDate} data-testid="date-input"/>
            </FormControl>

            <Button type="submit" $disabled={submitDisabled} disabled={submitDisabled} data-testid="submit-button">Analyze</Button>
        </Form>
    );
}

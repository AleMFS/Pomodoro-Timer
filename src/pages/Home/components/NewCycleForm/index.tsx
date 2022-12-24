import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


interface NewCycleFormData {
    task: string;
    minutesAmount: number
}

export function NewCycleForm() {

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>()
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                type="text"
                placeholder="Dê um nome para o seu projeto"
                list='task-suggestions'
                required
            {...register('task')}
            />
            <datalist id="task-suggestions">
                <option value="Projeto1"></option>
                <option value="Estudar"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                min={1}
                max={60}
                step={5}
                required
            {...register('minutesAmount', { valueAsNumber: true })}

            />

            <span>minutos.</span>
        </FormContainer>
    )
}
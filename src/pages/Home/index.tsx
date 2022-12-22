import { Play } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
    CountDownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountdownButton,
    TaskInput
} from './styles'

interface NewCycleFormData {
    task:string;
    minutesAmount: number
}

export function Home() {


    const { register, handleSubmit, watch,reset } = useForm<NewCycleFormData>()

    function handleCreateNewCycle(data:NewCycleFormData) {
        console.log(data)
        console.log(data.minutesAmount)
        reset()

    }
    const task = watch('task')
    const isSubmitDisabled = !task



    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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
                        min={5}
                        max={60}
                        step={5}
                        required
                        {...register('minutesAmount', { valueAsNumber: true })}

                    />

                    <span>minutos.</span>
                </FormContainer>
                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>


                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}
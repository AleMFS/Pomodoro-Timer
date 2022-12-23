import { useState } from "react";
import { CountDownContainer, Separator } from "./styles";

export function Countdown() {

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    
    return (
        <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountDownContainer>
    )
}
import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallegensContext";

type CountdownContextData = {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

type CountdownContextProps = {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownContextProps) {

    const timeOut = (25 * 60)

    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(timeOut)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHashFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHashFinished(false)
        setTime(timeOut)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHashFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }} >
            { children }
        </ CountdownContext.Provider>
            )
}
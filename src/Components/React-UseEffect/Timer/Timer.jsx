import React from "react"
import { TimerMain } from "./Components/TimerMain"
export function Timer() {
    return <>
        <TimerMain initial={3} final={ 15}/ >
    </>
}
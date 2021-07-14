import React, {FC, useEffect, useState} from "react";

const getRandomNumber = (): number => Math.floor(Math.random() * 26) + 1

const CurrentNumber: FC = () => {
    const [number, setNumber] = useState<number>();

    useEffect(() => {
        setTimeout(
            () => setNumber(getRandomNumber()),
            3000
        )
    }, [number])

    return <div>{number}</div>
}

export default CurrentNumber;

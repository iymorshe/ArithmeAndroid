import React, { useEffect, useState } from "react";
import { Text } from "react-native"; // Import the Text component from react-native

export default function Timer({ max, score }) {
    const [counter, setCounter] = useState(max);
    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter]);
    return (
        <Text> {/* Replace <span> with <Text> */}
            {counter}
            {counter === 0 && <Text>Game Over! Final score: {score}</Text>} {/* Replace <p> with <Text> */}
        </Text>
    );
}


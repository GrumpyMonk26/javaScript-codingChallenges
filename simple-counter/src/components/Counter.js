import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const [mCount, rSetCount] = useState(0);

    return (
        <div>
            <p>you clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Add One
            </button>

            <p>Take me away {mCount} times </p>
            <button onClick={() => rSetCount(mCount - 1)}>
                Take One
            </button>
        </div>
    );
}

export default Counter

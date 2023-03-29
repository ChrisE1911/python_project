import { createContext, useState } from 'react';

export const MatchContext = createContext(props);

export default function MatchProvider() {
    const [count, setCount] = useState(0);

    return (
        <MatchContext.Provider value={{ count, setCount }}>
            {props.children}
        </MatchContext.Provider>
    );
}

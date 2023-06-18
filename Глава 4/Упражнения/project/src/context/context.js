import { createContext } from 'react';

const Context = createContext({ count: 0, setCount: function () {} });

export default Context;

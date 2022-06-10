import {createContext} from 'react';

const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text',
    forcedChangeMail: () => {}
});

export default dataContext;
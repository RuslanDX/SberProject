// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {createContext} from 'react'
//глобальное хранилище переменных
export const AuthContext = createContext(true); // было null

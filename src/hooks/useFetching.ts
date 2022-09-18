// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {useState} from "react";

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: any[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError((e as any).message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}

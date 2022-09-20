import {useState} from "react";

// export interface ReturnOfFetching
// {
//     fetching_(...args: any[]): void;
//     isLoading_: boolean;
//     error_: string
// };

export function useFetching(callback: any): [Function, boolean, string]
{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetching(...args: any[]): Promise<void>
    {
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

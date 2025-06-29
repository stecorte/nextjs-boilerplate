'use client'

import useSWR from "swr"
import { fetcher } from '@/lib/fetcher'

interface ApiError extends Error {
    status?: number
    statusText?: string
    data?: any
}

interface UseApiOptions {
    onSuccess?: (data: any) => void
    onError?: (error: ApiError) => void
    revalidateOnFocus?: boolean
}

export function useApi<T = any>(
    path: string | null,
    options: UseApiOptions = {}
) {
    const apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL!
    const url = apiBaseUrl + path

    const { onSuccess, onError, ...swrOptions } = options
    const { data, error, isLoading, mutate } = useSWR<T, ApiError>(
        url,
        fetcher,
        {
            revalidateOnFocus: false,
            onSuccess,
            onError,
            ...swrOptions
        }
    )

    return {
        data, 
        error,
        isLoading,
        mutate,
        isError: !!error,
        isSuccess: !!data && !error
    }
}
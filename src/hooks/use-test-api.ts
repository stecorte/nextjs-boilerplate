'use client'

import { useApi } from '@/hooks/use-api'

export function useTestApi() {
    return useApi('/api/test', {
        onSuccess: (data: any) => {
            console.log('✅ Test API success:', data);
        },
        onError: (error: any) => {
            // console.error('❌ Test API error:', error.status, error.message);
        }
    })
}
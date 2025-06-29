'use server'

import { redirect } from "next/navigation"

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    return {
        error: 'Errore generico',
        success: false
    }

    redirect('/dashboard')
}
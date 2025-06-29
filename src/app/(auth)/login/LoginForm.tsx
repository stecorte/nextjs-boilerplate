'use client'

import { useTranslations } from "next-intl"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import styles from './styles.module.css'
import { useActionState } from 'react'
import { loginAction } from "@/app/actions"
import { useTestApi } from "@/hooks"

export default function LoginForm() {
    const t = useTranslations('Auth.Login')

    const [state, formAction, isPending] = useActionState(loginAction, {
        error: null,
        success: false
    })

    const { data, error, isLoading } = useTestApi()

    return (
        <Card>
            <CardHeader>
                <CardTitle className={styles.loginCardTitle}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent>
                {error &&
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        Errore...
                    </div>
                }

                {isLoading &&
                    <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">Loading...</div>
                }
                {!isLoading && !error &&
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                        {data.message}
                    </div>
                }
                
                <form action={formAction}>
                    {state.error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {state.error}
                        </div>
                    )}

                    {state.success && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                            Login riuscito! Reindirizzamento in corso...
                        </div>
                    )}

                    <Input
                        type="email"
                        placeholder={t('email')}
                        name="email"
                        disabled={isPending}
                        // value="stefano@omeny.io"
                        required
                    />

                    <Input
                        className="my-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        // value="password"
                        required
                        disabled={isPending}
                    />

                    <div className="flex justify-end">
                        <Link href="/forgot-password" className={styles.forgotPasswordLink}>
                            {t('forgotPassword')}
                        </Link>
                    </div>

                    <Button
                        className="block w-full mt-3"
                        type="submit"
                    >Login</Button>
                </form>

                <p className="mt-4">
                    {t('notRegisteredYet')} <Link href="signup" className={styles.subscibeLink}>{t('subscribe')}</Link>
                </p>
            </CardContent>
        </Card>
    )
}
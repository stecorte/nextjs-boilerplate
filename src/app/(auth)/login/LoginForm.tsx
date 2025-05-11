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
import { useState } from 'react';

export default function LoginForm() {
    const t = useTranslations('Auth.Login')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('Email: ', email)
        console.log('Password: ', password)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className={styles.loginCardTitle}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent>
                <Input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    className="my-3"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex justify-end">
                    <Link href="/forgot-password" className={styles.forgotPasswordLink}>{t('forgotPassword')}</Link>
                </div>

                <Button
                    className="block w-full mt-3"
                    onClick={handleLogin}
                >Login</Button>
            </CardContent>
        </Card>
    )
}
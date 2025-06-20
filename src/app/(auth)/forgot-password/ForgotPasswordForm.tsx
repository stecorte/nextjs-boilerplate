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
import styles from './style.module.css'
import Link from "next/link"
import { useState } from 'react'

export default function ForgotPasswordForm() {
    const t = useTranslations('Auth.ForgotPassword')

    const [email, setEmail] = useState('')

    const handleForgotPassword = () => {
        console.log('Email: ', email)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className={styles.forgotPasswordCardTitle}>{t('title')}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="pb-4">{t('subtitle')}</p>
                <Input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    className="block w-full mt-3"
                    onClick={handleForgotPassword}
                >{t('recoverPassword')}</Button>

                <Link href="/login" className={styles.goBackLink}>{t('back')}</Link>
            </CardContent>
        </Card>
    )
}
'use client'

import { useTranslations } from "next-intl"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import styles from './styles.module.css'

export default function SignupForm() {
    const t = useTranslations('Auth.Signup')

    return (
        <Card>
            <CardHeader>
                <CardTitle className={styles.loginCardTitle}>{t('title')}</CardTitle>
            </CardHeader>
        </Card>
    )
}
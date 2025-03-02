import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    const t = useTranslations('HomePage')

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
            <Button>Click me</Button>
        </div>
    )
}
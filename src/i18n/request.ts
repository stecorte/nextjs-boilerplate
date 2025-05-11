import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
    const locales: string[] = ["it", "en"]
    const defaultLocale: string = "en"

    let locale: string = defaultLocale

    // 1. Read locale from Accept-Language header
    try {
        const headersList = headers()
        const acceptLanguage = (await headersList).get('accept-language')

        if (acceptLanguage) {
            // Parse the Accept-Language header
            const browserLocales = acceptLanguage.split(',')
                .map(lang => {
                    const [locale, priority = 'q=1.0'] = lang.trim().split(';');
                    const q = parseFloat(priority.split('=')[1] || '1.0');
                    return { locale, q };
                })
                .sort((a, b) => b.q - a.q)
                .map(item => item.locale)

            // Check if any of the preferred languages match our supported locales
            for (const browserLocale of browserLocales) {
                if (locales.includes(browserLocale)) {
                    locale = browserLocale
                    break
                }
            }
        }
    } catch (error) {
        console.error('Error parsing Accept-Language header:', error);
    }

    // 2. Override locale if set in cookie
    const cookieLocale: string | undefined = (await cookies()).get("x-locale")?.value
    if (locales.includes(cookieLocale || "zz-ZZ")) {
        locale = cookieLocale || defaultLocale
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const locales: string[] = ["it-IT", "en-GB"]
    const defaultLocale: string = "en-GB"

    let locale: string = defaultLocale

    // Read locale from cookies
    const cookieLocale: string | undefined = (await cookies()).get('x-locale')?.value
    if (locales.includes(cookieLocale || 'zz-ZZ')) {
        locale = cookieLocale || defaultLocale
    }

    const browserLocale: string | undefined = navigator.language
    if (typeof browserLocale === 'string') {
        if (locales.includes(browserLocale)) {
            locale = browserLocale
        }
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const locales: string[] = ["it-IT", "en-GB"]
    const defaultLocale: string = "en-GB"

    let locale: string = defaultLocale

    // 1. Read locale from system preferences
    let browserLocale: string | undefined = navigator.language
    if (typeof browserLocale === "string") {

        if (browserLocale.length == 2) {
            if (browserLocale.toLowerCase() === "it") {
                browserLocale = "it-IT"
            } else if (browserLocale.toLowerCase() === "en") {
                browserLocale = "en-GB"
            }
        }

        if (locales.includes(browserLocale)) {
            locale = browserLocale
        }
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
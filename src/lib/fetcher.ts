export const fetcher = async (url: string) => {
    const response = await fetch(url)

    if (!response.ok) {
        const error = new Error(`HTTP Error: ${response.status}`) as any;
        error.status = response.status
        error.statusText = response.statusText

        try {
            error.data = await response.json()
        } catch {
            error.data = await response.text()
        }

        throw error
    }

    return response.json()
}
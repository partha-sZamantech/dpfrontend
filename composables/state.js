
export const desktopMenuState = () => {
    return useState(()=> false)
}

export const globalPopupState = () => {
    return useState(() => false)
}

export const allCategoryState = () => {
    return useState(() => [])
}
export const specialTopContentState = () => {
    return useState(() => [])
}

export const NationalHomeContentState = () => {
    return useState(() => [])
}

export const siteUrlState = () => {
    return useState(() => ({
        site_url: 'http://127.0.0.1:8000'
    }))
}

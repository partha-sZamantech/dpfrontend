import { getDate } from 'bangla-calendar';

// ========== Bangla Date ================ //
export const BanglaDate = () => {
    const banglaDate = new Date();
    return getDate(banglaDate, { format: 'D MMMM YYYY', calculationMethod: 'BD' })
}
// ========== Bangla Date ================ //
// ========== English Date ================= //
export const EnglishDate = () => {
    const getDateToday = new Intl.DateTimeFormat('bn-bd', { weekday: 'long', year: 'numeric', month: 'long', day: "numeric" })
    return getDateToday.format(new Date())
}
// ========== English Date ================= //

// ================ Get Bangla Post Create Date ============== //
export const postCreatedDate = (date) => {
    const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric" })
    // const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Post Create Date ============== //

// ================ Get Bangla Post Create Date with Time ============== //
export const postCreatedDateWithTime = (date) => {
    const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric", hour: "numeric", minute: 'numeric', timeZone: "GMT" })
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Post Create Date ============== //

// ======== Post Url Generate ============ //
export const getPostUrl = (category_slug, subcategory_slug, content_type, content_id) => {
    return `/${category_slug}/${subcategory_slug ? subcategory_slug : (content_type === 1 ? 'news' : 'article')}/${content_id}`
}
// ======== Post Url Generate ============ //


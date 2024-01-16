// ================ Get Bangla Date ============== //
export const postCreatedDate = (date) => {
    const getDate = new Intl.DateTimeFormat('bn-bd', { year: 'numeric', month: 'long', day: "numeric" })
    // const postDate = getDate.format(new Date(detailsContent.value.created_at)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    // If date value has
    if (date) {
        return getDate.format(new Date(date)).replace('এ', '|').replace('PM', 'পিএম').replace('AM', 'এএম')
    }
}
// ================ Get Bangla Date ============== //
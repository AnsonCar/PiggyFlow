export default defineNuxtRouteMiddleware((to, from) => {
    const page = to.path.split('/')[1]
    const title = page[0].toUpperCase() + page.slice(1)
    useHead({ title: title })
});
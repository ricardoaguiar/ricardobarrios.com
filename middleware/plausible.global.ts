export default defineNuxtRouteMiddleware(async to => {
    if(process.server) return
    console.log('Tracking middleware loaded');
    $fetch('https://plausible.io/api/event', {
        method: 'POST',
        body: {
            name: 'pageview',
            url: to.fullPath,
            domain: 'rba.dev',
            screen_width: window.innerWidth,
        }
    })
})
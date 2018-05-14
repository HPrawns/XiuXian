const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/player/home',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/player/home.vue'], resolve)
}];
export default routers;
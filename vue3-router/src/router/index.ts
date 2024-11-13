import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";

//路由懒加载，按需加载

//定义路由数组
const routes = [
    {
        path: '/',
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            { path: 'home', name: "Home", component: () => import('../views/home.vue') },
            { path: "/articles", name: "articleList", component: () => import("../views/ArticleList.vue")},
            {
                path: "/articles/:id", name: "articleDetail", component: () => import("../views/ArticleDetail.vue"),
                children: [
                    { path: "comment", name: "comment",  component: () => import("../views/Comment.vue") }
    ]},
    {
        path: "/user", name: "userDashBoard", component: () => import("../views/UserDashBoard.vue"), redirect: "/user/profile",children: [
            { path: "profile", name: "userProfile", component: () => import("../views/UserProfile.vue") },
            { path: "setting", name: "userSetting", component: () => import("../views/UserSetting.vue")},
        ] },
        ]
    },
    { path: "/login", name: "login", component: () => import("../views/Login.vue") }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }
        }
    }
})

//配置全局路由导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path.startsWith("/user")) {
//         next("/login");
//     } else {
//         next();
//     }
// })
router.beforeEach((to, from, next) => {
    if (to.path.startsWith("/user") && !localStorage.getItem("token")) {
      alert("请先登录")
    next("/login");
  }else{
    next();
  }
});

export default router;
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component: function(){return import("../views/Home.vue")}
        },
        {
            path:"/categorias",
            name:"categorias",
            component: function(){return import("../views/Categorias.vue")}
        },
        {
            path:"/examen",
            name:"examen",
            component: function(){return import("../views/Examen.vue")}
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path:"/preguntas",
            name:"preguntas",
            component: function(){return import("../views/Preguntas.vue")}
        }
        ,
        {
            path:"/crearExamen",
            name:"crearExamen",
            component: function(){return import("../views/CrearExamen.vue")}
        }
    ]
})

export default router;
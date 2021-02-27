import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("../views/Contact.vue"),
	},
	{
		path: "/projects",
		name: "ListProjects",
		component: () => import("../views/ListProjects.vue"),
	},
	{
		path: "/projects/:id",
		name: "Project",
		component: () => import("../views/Project.vue"),
	},
	{
		path: "/functionalities",
		name: "ListFunctionalities",
		component: () => import("../views/ListFunctionalities.vue"),
	},
	{
		path: "/projects/:id/functionalities/:idF",
		name: "Functionality",
		component: () => import("../views/Functionality.vue"),
	},
	{
		path: "/gentes_de_martes",
		name: "Blog",
		component: () => import("../views/Blog.vue"),
	},
	{
		path: "/gentes_de_martes/entrada/:id",
		name: "Entry",
		component: () => import("../views/Entry.vue"),
	},
	{
		path: "*",
		name: "Error",
		component: () => import("../views/About.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;

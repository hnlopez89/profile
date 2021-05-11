import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../blog.json";

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
	...Blogs.entries.map((entry) => ({
		path: `/gentes_de_martes/entrada/${entry.file}`,
		name: `${entry.file}`,
		component: () => import(`../content/${entry.file}`),
	})),
	{
		path: "*",
		name: "Error",
		component: () => import("../views/About.vue"),
	},
];

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});

export default router;

import Welcome from "./components/Welcome.vue";
import CategoryList from "./components/category/List.vue";
import CategoryCreate from "./components/category/Add.vue";
import CategoryEdit from "./components/category/Edit.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome
    },
    {
        name: "categoryList",
        path: "/category",
        component: CategoryList
    },
    {
        name: "categoryEdit",
        path: "/category/:id/edit",
        component: CategoryEdit
    },
    {
        name: "categoryAdd",
        path: "/category/add",
        component: CategoryCreate
    }
];

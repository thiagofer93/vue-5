import List from "./List";
import CreateEdit from "./CreateEdit";

export default [
  {
    path: "",
    name: "List",
    component: List,
  },
  {
    path: "/create",
    name: "Create",
    component: CreateEdit,
  },
  {
    path: "/:contato_id/edit",
    name: "Edit",
    component: CreateEdit,
    props: true,
  },
];

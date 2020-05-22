import App from "@/view/Index";
import Contacts from "@/view/contacts/routes";
import NotFound from "@/view/NotFound";

export default [
  {
    path: "/",
    component: App,
    children: [
      ...Contacts,
      {
        path: "/404",
        name: "NotFound",
        component: NotFound,
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
  },
];

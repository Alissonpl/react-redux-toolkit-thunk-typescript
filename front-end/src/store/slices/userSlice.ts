import { Search } from "../../pages/index";
import UserState from "../../@types/userState";
import { useParams } from "react-router-dom";

const initialState: UserState[] = [
  {
    route: "/counter",
    key: "counter",
    module: "counter",
    menu: true,
    component: Search,
  },
  {
    route: "/sair",
    key: "Sair",
    module: "sair",
    menu: true,
    component: Search,
  },
  {
    route: `/search?q=:text`,
    key: "search",
    module: "search",
    menu: true,
    component: Search,
  },
  {
    route: `/search`,
    key: "search",
    module: "search",
    menu: true,
    component: Search,
  },
];

export default initialState;

interface HeaderLink {
  id: number;
  path: string;
  name: string;
}

export const headerLinks: HeaderLink[] = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/favourites",
    name: "Favourites",
  },
  {
    id: 3,
    path: "/myposts",
    name: "My posts",
  },
];

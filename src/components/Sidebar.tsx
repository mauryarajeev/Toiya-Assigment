import { Link, useLocation } from "react-router-dom";
// sidebar Link
const menuItems = [
  {
    id: 1,
    name: "Contacts",
    link: "/contacts",
  },
  {
    id: 2,
    name: "Charts&Maps",
    link: "/",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    //return page content for ui
    <div className="lg:w-[250px] w-full bg-blue-100 lg:h-screen h-[36px] flex lg:flex-col flex-row justify-center items-center gap-1" style={{ backgroundColor: "00bfff" }}>
      {menuItems.map((item: any) => (
        <Link key={item?.id} to={item?.link}>
          <p
            className={`lg:text-lg font-medium cursor-pointer uppercase tracking-widest lg:w-[210px] p-2 rounded border hover:bg-blue-500 hover:text-white hover:scale-105 ${
              pathname === item?.link ? "border-cyan text-cyan" : "border-gray-400"
            }`}
            
          >
            {item?.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

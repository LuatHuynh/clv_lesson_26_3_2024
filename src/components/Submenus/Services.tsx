import CLVMenu from "@components/CLVMenu";

interface ServicesMenuProps {
  mobile?: boolean;
}

const ServicesMenu: React.FC<ServicesMenuProps> = () => {
  return (
    <CLVMenu
      title="Services"
      menu={[
        "Software Development",
        "Quality Assurance",
        "Global Service Desk",
      ].map((x) => {
        return {
          title: x,
          url: "/",
        };
      })}
    />
  );
};

export default ServicesMenu;

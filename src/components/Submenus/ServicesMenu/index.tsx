import CLVMenu from "../CLVMenu";

interface ServicesMenuProps {
  mobile?: boolean;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({ mobile }) => {
  return (
    <CLVMenu
      mobile={mobile}
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

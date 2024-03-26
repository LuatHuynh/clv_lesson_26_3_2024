import CLVMenu from "../CLVMenu";

interface CareersMenuProps {
  mobile?: boolean;
}

const CareersMenu: React.FC<CareersMenuProps> = ({ mobile }) => {
  return (
    <CLVMenu
      mobile={mobile}
      title="Careers"
      menu={["Experienced Hire", "Fresher Training Program"].map((x) => {
        return {
          title: x,
          url: "/",
        };
      })}
    />
  );
};

export default CareersMenu;

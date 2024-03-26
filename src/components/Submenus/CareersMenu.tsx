import CLVMenu from "@components/CLVMenu";

interface CareersMenuProps {
  mobile?: boolean;
}

const CareersMenu: React.FC<CareersMenuProps> = () => {
  return (
    <CLVMenu
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

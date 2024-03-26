import CLVMenu from "../CLVMenu";

interface SolutionsenuProps {
  mobile?: boolean;
}

const SolutionsMenu: React.FC<SolutionsenuProps> = ({ mobile }) => {
  return (
    <CLVMenu
      mobile={mobile}
      title="Solutions"
      menu={["Forwarding", "Container Tracking", "Shipping", "Factory"].map(
        (x) => {
          return {
            title: x,
            url: "/",
          };
        }
      )}
    />
  );
};

export default SolutionsMenu;

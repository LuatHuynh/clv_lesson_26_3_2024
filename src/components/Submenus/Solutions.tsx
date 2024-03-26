import CLVMenu from "@components/CLVMenu";

interface SolutionsenuProps {
  mobile?: boolean;
}

const SolutionsMenu: React.FC<SolutionsenuProps> = () => {
  return (
    <CLVMenu
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

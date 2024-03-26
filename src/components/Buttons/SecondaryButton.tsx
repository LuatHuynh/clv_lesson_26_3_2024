import { Button, ButtonProps } from "antd";

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className="secondaryButton">
      {props.children}
    </Button>
  );
};

export default SecondaryButton;

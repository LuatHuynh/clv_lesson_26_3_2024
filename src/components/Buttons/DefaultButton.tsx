import { Button, ButtonProps } from "antd";

const DefaultButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className="defaultButton">
      {props.children}
    </Button>
  );
};

export default DefaultButton;

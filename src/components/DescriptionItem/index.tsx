import { Flex, Typography } from "antd";

interface DescriptionItemProps {
  title?: string;
  children: React.ReactNode;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  children,
}) => {
  return (
    <Flex vertical>
      {title && (
        <Typography.Title style={{ color: "#2f4064" }} level={4}>
          {title}
        </Typography.Title>
      )}
      <Typography>{children}</Typography>
    </Flex>
  );
};

export default DescriptionItem;

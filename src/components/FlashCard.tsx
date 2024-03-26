import { Flex } from "antd";

interface FlashCardProps {
  title?: string;
  children: React.ReactNode;
}

const FlashCard: React.FC<FlashCardProps> = ({ title, children }) => {
  return (
    <Flex vertical>
      {title && (
        <h4 className="text-2xl text-primary text-center md:text-start">
          {title}
        </h4>
      )}
      <p className="text-sm md:text-base">{children}</p>
    </Flex>
  );
};

export default FlashCard;

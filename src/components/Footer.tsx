import { Space } from "antd";
import { FacebookFilled, YoutubeFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row py-12 px-20 
          w-full items-center justify-between border-t"
    >
      <Space>
        <a
          href="#facebook"
          className="flex w-20 text-icon-color justify-center"
        >
          <FacebookFilled className="text-4xl" />
        </a>
        <a
          href="#youtube"
          className="flex w-20 text-icon-color justify-center
                                     hover:text-youtube-red text-4xl"
        >
          <YoutubeFilled />
        </a>
      </Space>
      <div
        className="mb-3 flex flex-col items-center md:order-2 md:mb-0 md:flex-row 
                  font-bold text-sm text-[#000000D9]"
      >
        <a href="#contact-us" className="my-1.5 md:mx-3 hover:text-link-hover">
          CONTACT US
        </a>
        <a href="#join-us" className="my-1.5 md:mx-3 hover:text-link-hover">
          JOIN US
        </a>
      </div>
    </div>
  );
};

export default Footer;

import { Pagination } from "antd";
import { useEffect } from "react";
import { detectScreen } from "../../../hooks/useScroll";

export const PaginationBar = ({ data, setDataInfo }) => {
  const { width } = detectScreen(window.innerWidth);

  const onChange = (pageNumber) => {
    setDataInfo(data.slice(pageNumber * width - width, width * pageNumber));
  };

  useEffect(() => {
    onChange(1);
  }, [width]);

  return (
    <Pagination    
      showQuickJumper
      responsive
      defaultCurrent={1}
      total={Math.ceil(data.length / width) * 10}
      showSizeChanger={false}
      locale={{ jump_to: "Ir a página", page: "" }}
      onChange={onChange}
    />
  );
};

import parse from "html-react-parser";

interface Props {
  content: string;
}
const Overview = ({ content }: Props) => {
  return <div>{content && <div>{parse(content ?? "")}</div>}</div>;
};

export default Overview;

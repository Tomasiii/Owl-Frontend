import Htag from "../components/ui-atoms/Htag/Htag";
import Button from "../components/ui-atoms/Button/Button";
import Rating from "../components/Rating/Rating";

export default function Home() {
  return (
    <div>
      <Htag tag="h3">text</Htag>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Rating rating={4} isEditable />
    </div>
  );
}

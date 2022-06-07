import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

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
    </div>
  );
}

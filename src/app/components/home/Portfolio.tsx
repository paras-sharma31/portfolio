import Button from "../common/Button";
import Filters from "./Filter";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-img w-full h-[321px] flex justify-center items-center">
        <Button href="">PORTFOLIO</Button>
      </div>
      <Filters />
    </>
  );
}

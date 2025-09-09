import { Layout } from "./components/Layout";
import PenIcon from "./icons/pen.svg?react";
import PiggyIcon from "./icons/piggy.svg?react";
import SunIcon from "./icons/sun.svg?react";
import DemoIcon from "./icons/demo.svg?react";

function App() {
  return (
    <Layout>
      <section>
        <h1 className="flex gap-2 text-4xl">
          Content
          <DemoIcon title={"Demo"} />
          <PiggyIcon title={"Piggy Bank"} />
          <SunIcon title={"Sun"} />
          <PenIcon
            // className="[&_*]:[vector-effect:non-scaling-stroke]"
            // style={{ color: "purple" }}
            // className="text-red-500"
            // width={200}
            // height={"auto"}
            title={"Pen"}
          />
        </h1>
      </section>
    </Layout>
  );
}

export default App;

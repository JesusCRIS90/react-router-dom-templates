import { CenterLayout } from "../../layouts/Layaouts";

export const Test1 = () => {
  return (
    <>
      <h1>Page 1</h1>
    </>
  );
};

export function TestPage1() {
  return (
    <CenterLayout className="center-home-page">
      <Test1 />
    </CenterLayout>
  );
}

export default TestPage1;

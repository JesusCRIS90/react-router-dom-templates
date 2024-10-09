import { CenterLayout } from "../../layouts/Layaouts";

export const Test2 = () => {
  return (
    <>
      <h1>Page 2</h1>
    </>
  );
};

export function TestPage2() {
  return (
    <CenterLayout className="center-home-page">
      <Test2 />
    </CenterLayout>
  );
}

export default TestPage2;

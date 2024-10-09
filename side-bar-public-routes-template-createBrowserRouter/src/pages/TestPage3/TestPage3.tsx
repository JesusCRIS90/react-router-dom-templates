import { CenterLayout } from "../../layout/Layaouts";

export const Test3 = () => {
  return (
    <>
      <h1>Page 3</h1>
    </>
  );
};

export function TestPage3() {
  return (
    <CenterLayout className="center-home-page">
      <Test3 />
    </CenterLayout>
  );
}

export default TestPage3;

import { CenterLayout } from "../../layouts/Layaouts";

const Error = () => {
  return (
    <>
      <h1>Error Page</h1>
    </>
  );
};

export function ErrorPage() {
  return (
    <CenterLayout className="center-home-page">
      <Error />
    </CenterLayout>
  );
}

export default ErrorPage;

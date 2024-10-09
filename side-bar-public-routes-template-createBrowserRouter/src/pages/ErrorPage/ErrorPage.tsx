import { useRouteError } from "react-router-dom";

import { CenterLayout } from "../../layout/Layaouts";

interface RouteError {
  statusText?: string;
  message?: string;
}

export function Error() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export function ErrorPage() {
  return (
    <CenterLayout className="center-home-page">
      <Error />
    </CenterLayout>
  );
}

export default ErrorPage;

import { ReactNode, VFC } from "react";
import { FallbackProps, ErrorBoundary } from "react-error-boundary";

const ErrorFallback = (props: FallbackProps) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
    </div>
  );
};

export const LayoutErrorBoundary: VFC<{ children: ReactNode }> = (props) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};

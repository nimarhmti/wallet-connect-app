import React, { Suspense, SuspenseProps, lazy } from "react";
import { Route, Routes } from "react-router";
import NotFound from "../module/notFound/page/NotFound";
import AppLayout from "../components/layout";

const WalletConnectPage = withSuspense(
  lazy(() => import("../module/wallet/page/walletConnectPage"))
);
const SessionsPage = withSuspense(
  lazy(() => import("../module/sessions/page/SessionsPage"))
);

const defaultFallback = (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <p>...</p>
  </div>
);

function withSuspense<Props extends object>(
  WrappedComponent: React.ComponentType<Props>,
  options?: SuspenseProps
) {
  return function SuspendedComponent(props: Props) {
    return (
      <Suspense fallback={options?.fallback || defaultFallback}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<WalletConnectPage />} />
        <Route path="walletconnect" element={<WalletConnectPage />} />
        <Route path="sessions" element={<SessionsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

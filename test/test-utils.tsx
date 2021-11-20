import { render, RenderOptions } from "@testing-library/react";
import type { PropsWithChildren, ReactElement } from "react";
import I18nProvider from "next-translate/I18nProvider";
import common from "../locales/en/common.json";

function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <I18nProvider namespaces={{ common }} lang="en">
      {children}
    </I18nProvider>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}

export * from "@testing-library/react";
export { customRender as render };

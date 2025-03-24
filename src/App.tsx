import { ReactNode, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import MultiContainers from "./components/multi-container";
import { SelectVariant } from "./components/VariantSelect";
import { ThemeProvider } from "./components/theme-provider";
import { Variant } from "./type/variant";
import Simple from "./components/simple";
import { Sortable } from "./components/sortable";

export default function App() {
  const [variant, setVariant] = useState<Variant>("simple");

  return (
    <ThemeProvider defaultTheme="dark">
      <Layout variant={variant} setVariant={setVariant}>
        {variant === "simple" && <Simple />}
        {variant === "multi-container" && <MultiContainers />}
        {variant === "sortable" && <Sortable />}
      </Layout>
    </ThemeProvider>
  );
}

const Layout = ({
  children,
  variant,
  setVariant,
}: {
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
  variant: Variant;
  children: ReactNode;
}) => {
  return (
    <div className="bg-muted/50 flex h-screen max-h-screen justify-center">
      <div className="mt-40 flex h-fit min-h-[400px] w-full max-w-[800px] flex-col overflow-hidden">
        {/* header */}
        <div className="flex flex-row justify-between p-3 pl-6">
          <h1 className="text-xl font-bold">DND Kit</h1>
          <div className="flex gap-2">
            <SelectVariant setVariant={setVariant} variant={variant} />
            <ModeToggle />
          </div>
        </div>
        {/* content */}
        <div className="flex w-full flex-1 items-center justify-center rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

// g-gradient-to-r from-neutral-300 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700

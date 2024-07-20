// src/components/AppWrap.tsx
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import store from "@/store";
import CustomCursor from "./CustomCursor";
import "@/components/customScrollbar.css";
import { useRouter } from "next/navigation";

function AppWrap({ children }: { children: React.ReactNode; }) {

    const router = useRouter();

    return (
        <Provider store={store}>
            <SessionProvider>
                <NextUIProvider navigate={router.push}>
                    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
                        <CustomCursor />
                        {children}
                    </NextThemesProvider>
                </NextUIProvider>
            </SessionProvider>
        </Provider>
    );
}

export default AppWrap;

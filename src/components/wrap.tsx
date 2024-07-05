// src/components/AppWrap.tsx
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
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
                    <CustomCursor />
                    {children}
                </NextUIProvider>
            </SessionProvider>
        </Provider>
    );
}

export default AppWrap;

import { Spinner } from "@nextui-org/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="z-50 bg-purple-900/5 backdrop-blur text-white min-h-screen w-full grid justify-center items-center">
            <Spinner color="secondary" />
        </div>
    );
}
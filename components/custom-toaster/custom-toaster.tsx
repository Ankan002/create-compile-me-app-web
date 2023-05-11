"use client"

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                className: "border-2 rounded-md border-primary-dark bg-secondary-yellow font-quicksand text-base tracking-wider text-primary-dark font-semibold",
                success: {
                    className: "border-2 rounded-lg bg-secondary-yellow font-quicksand text-base tracking-wider text-primary-dark font-semibold border-primary-green"
                },
                error: {
                    className: "border-2 rounded-lg bg-secondary-yellow font-quicksand text-base tracking-wider text-primary-dark font-semibold border-primary-red"
                }
            }}
        />
    )
}

export default CustomToaster;
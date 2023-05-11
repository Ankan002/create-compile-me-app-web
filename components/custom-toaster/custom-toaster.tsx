"use client"

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                className: "border-2 rounded-sm border-primary-dark bg-secondary-light font-quicksand text-lg tracking-wider text-primary-dark font-bold",
                success: {
                    className: "border-2 rounded-sm bg-secondary-light font-quicksand text-lg tracking-wider text-primary-dark font-bold border-primary-green"
                },
                error: {
                    className: "border-2 rounded-sm bg-secondary-light font-quicksand text-lg tracking-wider text-primary-dark font-bold border-primary-red"
                }
            }}
        />
    )
}

export default CustomToaster;
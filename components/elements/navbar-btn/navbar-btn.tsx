"use client"

import { BsGithub } from "react-icons/bs";

type Props = {
    type: "github";
    link: string;
} | {
   type: "text";
   text: string;
   link: string;
}

const NavbarBtn = (props: Props) => {
    const { type, link } = props;

    const onButtonPressed = () => {
        if(window !== undefined) window.location.href = link;
    }

    return (
        <button className="p-2 flex justify-center items-center border-2 rounded-md border-primary-dark" onClick={onButtonPressed}>
            {
                type === "github" && (
                    <BsGithub className="text-xl text-primary-dark" />
                )
            }
        </button>
    )
}

export default NavbarBtn;
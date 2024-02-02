import { useState } from "react";

export default function useClick() {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
    }
    return { isClicked, handleClick };
}


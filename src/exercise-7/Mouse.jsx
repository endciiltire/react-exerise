import { useState, useEffect } from "react";
function Mouse() {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseY(event.clientY);
           setMouseX(event.clientX)
        }
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <div>
         <h1>mouse X: {mouseX} </h1>
         <h1>mouse y: {mouseY} </h1>

        </div>
    )

}
export default Mouse;
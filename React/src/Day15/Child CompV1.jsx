import { useEffect } from "react";

const CompV1 = () => {
  useEffect(() => {
    console.log("Child V1 Mounting");

    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log("ChildV1 unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div>Child CompV1</div>;
};

export default CompV1;

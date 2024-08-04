import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been setup");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);

  return (
    <>
      <p>This is the current Time: {time.toLocaleString()}</p>
    </>
  );
}

export default CurrentTime;

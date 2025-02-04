import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(0);
  const background = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${count * 0.05})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={{
        ...background,
        padding: "20px",
        height: "100vh",
      }}
    >
      <Container>
        <h2>Counter: {count}</h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <Button
            variant="contained"
            onClick={() => setCount(count + 1)}
            sx={{ margin: "8px" }}
          >
            +
          </Button>
          <Button
            variant="contained"
            onClick={() => setCount(0)}
            sx={{ margin: "8px" }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={() => setCount(count - 1)}
            sx={{ margin: "8px" }}
          >
            -
          </Button>
        </div>
      </Container>
    </animated.div>
  );
};

export default Counter;

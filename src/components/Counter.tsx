import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  const reset = () => setCount(0);

  const handleSpring = useSpring({
    height: count * 10,
    config: { tension: 170, friction: 26 },
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Counter: {count}
      </Typography>
      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={increment}
          sx={{ mr: 1 }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={decrement}
          sx={{ mr: 1 }}
        >
          Decrement
        </Button>
        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </Box>
      <div className="CounterClass">
        <Box
          position="relative"
          width="100%"
          height="250px"
          border="1px solid #ccc"
        >
          <animated.div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              background: "#1976d2",
              ...handleSpring,
            }}
          />
        </Box>
      </div>
    </Box>
  );
};

export default Counter;

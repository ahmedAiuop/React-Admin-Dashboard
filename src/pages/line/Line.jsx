import { Box } from "@mui/material";
import LineChart from "./lineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <LineChart />
    </Box>
  );
};

export default Line;

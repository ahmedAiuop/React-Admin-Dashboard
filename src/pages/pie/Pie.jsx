import { Box } from "@mui/material";
import PieChart from "./pieChart";
import Header from "../../components/Header";


const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <PieChart />
    </Box>
  );
};

export default Pie;

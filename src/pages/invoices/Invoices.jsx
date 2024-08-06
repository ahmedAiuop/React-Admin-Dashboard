import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;

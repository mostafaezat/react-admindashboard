import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
  return (
    <div className="data_table">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize:7},
          },
        }}
        // pageSize={5}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

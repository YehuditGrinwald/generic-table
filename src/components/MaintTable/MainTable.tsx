import { useEffect, useMemo } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useSelector } from "react-redux";
import { IAppState } from "../../Interfaces";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTree } from "@table-library/react-table-library/tree";
import { useGenerateColumn } from "../../hooks/useGenerateColumn";
import Pagination from "../Pagination/Pagination";

export default function MainTable() {
  const columns = useSelector((state: IAppState) => state.columns);
  const rowsData = useSelector((state: IAppState) => state.rowsData);
  const searchValue = useSelector((state: IAppState) => state.searchValue);


  useEffect(
    function resetPagination() {
      pagination.fns.onSetPage(0)
    },
    [searchValue]
  );

  const data = {
    nodes: useMemo(() => {
      if (searchValue !== "") {
        const res = rowsData.filter((row) =>
          Object.values(row).some(
            (cell) =>
              typeof cell !== "boolean" && cell.toString().includes(searchValue)
          )
        );
        return res;
      } else {
        return rowsData;
      }
    }, [rowsData, searchValue]),
  };

  const renderColumns = useGenerateColumn(columns);

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10, //number of rows to display per page
    },
  });

  const theme = useTheme([
    getTheme(),
    {
      Table: `
          --data-table-library_grid-template-columns:  30% repeat(2, minmax(0, 1fr)) 25% 100px;
        `,
    },
  ]);

  const tree = useTree(data);

  return (
    <div>
      <CompactTable
        columns={renderColumns}
        data={data}
        pagination={pagination}
        theme={theme}
        tree={tree}
      />
      <br />
      <Pagination pagination={pagination} data={data} />
    </div>
  );
}

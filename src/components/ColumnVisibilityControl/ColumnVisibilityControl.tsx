import { useDispatch, useSelector } from "react-redux";
import { IAppState, IColumn } from "../../Interfaces";
import { updateHiddenColumns } from "../../store";

export default function ColumnVisibilityControl() {
  const dispatch = useDispatch();

  const hiddenColumns = useSelector((state: IAppState) => state.hiddenColumns);
  const columns = useSelector((state: IAppState) => state.columns);

  const updateHiddenColumnsVisibility = (columnId: string) => {
    const updatedHiddenColumns = hiddenColumns.includes(columnId)
      ? hiddenColumns.filter(
          (hiddenColumn: string) => hiddenColumn !== columnId
        )
      : [...hiddenColumns, columnId];

    dispatch(updateHiddenColumns(updatedHiddenColumns));
  };

  return (
    <div style={{ display: "flex" }}>
      {columns.map((column: IColumn) => (
        <div key={column.id}>
          <label htmlFor={column.id}>
            <input
              id={column.id}
              type="checkbox"
              value={column.id}
              checked={!hiddenColumns.includes(column.id)}
              onChange={() => updateHiddenColumnsVisibility(column.id)}
            />
            {column.title}
          </label>
        </div>
      ))}
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { IAppState, IColumn } from "../Interfaces";
import { updateRowsData } from "../store";

export function useGenerateColumn(columns: IColumn[]) {
  const dispatch = useDispatch();

  const selectOptions = ["learn", "setup"];
  const hiddenColumns = useSelector((state: IAppState) => state.hiddenColumns);

  return columns.map((column: IColumn) => {
    const { id, title, type, width, hide, tree } = column;
    const renderCell = (item: { [x: string]: any }) => {
      switch (type) {
        case "string":
        case "number":
          return item[id];
        case "boolean":
          return (
            <input
              type="checkbox"
              checked={item[id]}
              onChange={(event) => {}}
            />
          );
        case "select":
          return (
            <select
              onChange={(event) => {
                const updatedItem = { ...item, [id]: event.target.value };
                dispatch(updateRowsData(updatedItem));
              }}
            >
              {selectOptions.map((opt) => (
                <option key={opt} selected={opt === item[id]} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          );
        default:
          return item[id];
      }
    };
    return {
      label: title,
      renderCell,
      width,
      hide: hide ?? hiddenColumns.includes(id),
      tree,
    };
  });
}

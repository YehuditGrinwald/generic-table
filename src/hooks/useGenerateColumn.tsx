import { useDispatch, useSelector } from "react-redux";
import { IAppState, IColumn } from "../Interfaces";
import { updateRowsData } from "../store";

export function useGenerateColumn(columns: IColumn[]) {
  const dispatch = useDispatch();

  const selectOptions = ["learn", "setup"];
  const hiddenColumns = useSelector((state: IAppState) => state.hiddenColumns);

  const handleChange = (
    item: { [x: string]: any },
    id: string,
    value: string | number | boolean
  ) => {
    const updatedItem = { ...item, [id]: value };
    dispatch(updateRowsData(updatedItem));
  };
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
              onChange={(event) => handleChange(item, id, !item[id])}
            />
          );
        case "select":
          return (
            <select
              onChange={(event) => handleChange(item, id, event.target.value)}
            >
              {selectOptions.map((opt) => (
                <option key={opt} defaultValue={item[id]} value={opt}>
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

import { IColumn } from "../Interfaces";

export const columns: IColumn[] = [
  {
    id: "task",
    ordinalNo: 1,
    title: "Task",
    type: "string",
    width: 15,
    tree: true,
  },
  {
    id: "deadline",
    ordinalNo: 2,
    title: "Deadline",
    type: "string",
    width: 100,
  },
  {
    id: "is_completed",
    ordinalNo: 4,
    title: "complete",
    type: "boolean",
    width: 120,
  },
  {
    id: "type",
    ordinalNo: 3,
    title: "Type",
    type: "select",
    width: 100,
  },
  {
    id: "priority",
    ordinalNo: 3,
    title: "Priority",
    type: "number",
    width: 300,
  },
];

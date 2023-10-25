import { IrowData } from "../../Interfaces";

interface IPaginationProps {
  pagination: any;
  data: {
    nodes: IrowData[];
  };
}
export default function Pagination({ pagination, data }: IPaginationProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>
      <span>
        Page:{" "}
        {pagination.state
          .getPages(data.nodes)
          .map((node: IrowData, index: number) => (
            <button
              key={node.id}
              type="button"
              style={{
                fontWeight: pagination.state.page === index ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
      </span>
    </div>
  );
}

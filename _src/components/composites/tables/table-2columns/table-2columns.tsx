import { Table2ColumnsType } from "./table-2columns.type";
import styles from "./table-2columns.module.scss";
import { TdItem, ThItem } from "@/_src/components/ui";

const Table2Columns = (props: Table2ColumnsType) => {
  const {tableItems} = props;
  return (
    <table className={styles.table_2columns}>
      <tbody>
        {tableItems.map((item, index) => (
          <tr key={index}>
            <ThItem text={item.thText.text} />
            <TdItem text={item.tdText.text} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table2Columns;
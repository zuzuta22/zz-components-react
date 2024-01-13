import { TdItem } from "@/_src/components/ui";
import { TdItemType } from "@/_src/components/ui/tables/td-item/td-item.type"
import { ThItemType } from "@/_src/components/ui/tables/th-item/th-item.type"

export type Table2ColumnsItemType = {
  thText: ThItemType;
  tdText: TdItemType;
};

export type Table2ColumnsType = {
  tableItems: Table2ColumnsItemType[];
}
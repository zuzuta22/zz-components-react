import { TextListItemType } from "@/_src/components/ui/lists/text-list-item/text-list-item.type"

export type TextListType = {
  listItems: TextListItemType[];
  listType?: "dotted" | "numbered" | "asterisked" | string;
  styleType?: "alternated" | "lined" | string;
};
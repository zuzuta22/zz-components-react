"use client";

import AddressBlock from "@/_src/components/composites/address-block/address-block";
import AddressText from "@/_src/components/ui/texts/address-text/address-text";
import ZipText from "@/_src/components/ui/texts/zip-text/zip-text";
import DynamicTitle from "@/_src/components/ui/titles/dyanmic-title/dyanmic-title";
import { addressBlockContext } from "@/_src/contexts/address-block.context";

const PagePlayground = () => {
  return (
    <>
      <h1>PlayGround</h1>
      <DynamicTitle tag={'h1'} text={"h1 Title"} />
      <DynamicTitle tag={'h2'} text={"h2 Title"} />
      <DynamicTitle tag={'h3'} text={"h3 Title"} />
      <DynamicTitle tag={'h4'} text={"h4 Title"} />
      <DynamicTitle tag={'h5'} text={"h5 Title"} />
      <DynamicTitle tag={'h6'} text={"h6 Title"} />
      <DynamicTitle text={"div Text"} />
      <ZipText zipCode={addressBlockContext.zipCode} />
      <AddressText address1={addressBlockContext.address1} address2={addressBlockContext.address2} />
      <AddressBlock
        zipCode={addressBlockContext.zipCode}
        address1={addressBlockContext.address1}
        address2={addressBlockContext.address2}
      />
    </>
  )
}

export default PagePlayground;
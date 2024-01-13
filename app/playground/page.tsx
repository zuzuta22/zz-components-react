"use client";
import TextList from "@/_src/components/composites/lists/text-list/text-list";
import Table2Columns from "@/_src/components/composites/tables/table-2columns/table-2columns";
import LayoutFlex2Columns from "@/_src/components/layouts/layout-flex-2columns/layout-flex-2columns";
import LayoutSectionInner from "@/_src/components/layouts/layout-secition-inner/layout-section-inner";
import LayoutSection from "@/_src/components/layouts/layout-section/layout-section";
import { ButtonLink, DynamicTitle } from "@/_src/components/ui";
import ImageResp from "@/_src/components/ui/images/image-resp/image-resp";
import { dotTextListItemsContext } from "@/app/playground/sample-contexts/dot-text-list.context";
import { table2ColumnsContext } from "@/app/playground/sample-contexts/teble-2columns.context";

const PagePlayground = () => {
  return (
    <>
      <LayoutSection>
        <LayoutSectionInner>
          <DynamicTitle tag={'h2'} text={"PlayGround"} />
          {/* <DynamicTitle tag={'h1'} text={"h1 Title"} />
          <DynamicTitle tag={'h2'} text={"h2 Title"} />
          <DynamicTitle tag={'h3'} text={"h3 Title"} />
          <DynamicTitle tag={'h4'} text={"h4 Title"} />
          <DynamicTitle tag={'h5'} text={"h5 Title"} />
          <DynamicTitle tag={'h6'} text={"h6 Title"} />
          <DynamicTitle text={"div Text"} /> */}
          {/* <ZipText zipCode={addressBlockContext.zipCode} /> */}
          {/* <AddressText address1={addressBlockContext.address1} address2={addressBlockContext.address2} /> */}
          {/* <AddressBlock
            zipCode={addressBlockContext.zipCode}
            address1={addressBlockContext.address1}
            address2={addressBlockContext.address2}
          /> */}
          {/* <DateText date={new Date()} />
          <br />
          <DateText date={new Date()} format={"yyyymmdd"} />
          <br /> */}
          {/* <SimpleLabel text={"NEW"} />
          <LabelLink text={"Inner Link"} linkTo={"playground"} />
          <LabelLink text={"External Link"} linkTo={"https://google.com"} isExternal={true} /> */}
          {/* <Copyright text={<>&copy; 2011 zuzulabs.net</>} /> */}
          {/* <FaqListContainer
            faqItems={[{questionText: {text: "question text"}, answerText: {text: `answer text.\nanswer text.\nanswer text. answer text.` }}]}
          />
          <FaqJson /> */}
          {/* <p>test</p> */}
          {/* <br /> */}
          <TextList 
            listItems={dotTextListItemsContext.listItems}
            listType={"dotted"} 
            styleType={"lined"}
          />
          <br />
          <Table2Columns tableItems={table2ColumnsContext.tableItems} />
          <br />
          <ImageResp
            srcPC={"/sample-images/sample_png_2560x1600.png"}
            srcSP={"/sample-images/sample_png_750x1334.png"}
            srcWebpPC={"/sample-images/sample_png_2560x1600.png.webp"}
            srcWebpSP={"/sample-images/sample_png_750x1334.png.webp"}
            widthPC={1920}
            heightPC={720}
            widthSP={375}
            heightSP={667}
            altText={"This is Sample Text for ImageResp"}
          />
        </LayoutSectionInner>
      </LayoutSection>
      <LayoutSection>
        <LayoutFlex2Columns ratio="3to7">
          <LayoutSectionInner>test</LayoutSectionInner>
          <LayoutSectionInner>test2</LayoutSectionInner>
        </LayoutFlex2Columns>
      </LayoutSection>
      <LayoutSection>
        <p>test</p>
        <ButtonLink
          text={"Back to Home"}
          linkTo={"/"}
          type={"round"}
        />
      </LayoutSection>
      
    </>
  )
}

export default PagePlayground;
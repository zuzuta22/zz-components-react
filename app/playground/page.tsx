"use client";

import AddressBlock from "@/_src/components/composites/address-block/address-block";
import FaqJson from "@/_src/components/composites/faq-jsonld/faq-jsonld";
import FaqList from "@/_src/components/composites/faq-list/faq-list";
import FaqListContainer from "@/_src/components/composites/faq-list/faq-list.container";
import { AddressText, Copyright, DateText, DynamicTitle, LabelLink, SimpleLabel, ZipText } from "@/_src/components/ui";
import { FaqAnswer } from "@/_src/components/ui/texts/faq-answer/faq-answer";
import { FaqQuestion } from "@/_src/components/ui/texts/faq-question/faq-question";
import { addressBlockContext } from "@/_src/contexts/samples/address-block.context";

const PagePlayground = () => {
  return (
    <>
      <DynamicTitle tag={'h2'} text={"PlayGround"} />
      <DynamicTitle tag={'h1'} text={"h1 Title"} />
      <DynamicTitle tag={'h2'} text={"h2 Title"} />
      <DynamicTitle tag={'h3'} text={"h3 Title"} />
      <DynamicTitle tag={'h4'} text={"h4 Title"} />
      <DynamicTitle tag={'h5'} text={"h5 Title"} />
      <DynamicTitle tag={'h6'} text={"h6 Title"} />
      <DynamicTitle text={"div Text"} />
      {/* <ZipText zipCode={addressBlockContext.zipCode} /> */}
      {/* <AddressText address1={addressBlockContext.address1} address2={addressBlockContext.address2} /> */}
      <AddressBlock
        zipCode={addressBlockContext.zipCode}
        address1={addressBlockContext.address1}
        address2={addressBlockContext.address2}
      />
      <DateText date={new Date()} />
      <br />
      <DateText date={new Date()} format={"yyyymmdd"} />
      <br />
      <SimpleLabel text={"NEW"} />
      <LabelLink text={"Inner Link"} linkTo={"playground"} />
      <LabelLink text={"External Link"} linkTo={"https://google.com"} isExternal={true} />
      <Copyright text={<>&copy; 2011 zuzulabs.net</>} />
      <FaqListContainer
        faqItems={[{questionText: {text: "question text"}, answerText: {text: `answer text.\nanswer text.\nanswer text. answer text.` }}]}
      />
      <FaqJson />
      <p>test</p>
    </>
  )
}

export default PagePlayground;
"use client";
// node moudules
import React, { useEffect, useState } from "react";

// FAQのdtとddのセットの型
export type FaqItemType = {
  id?: string;
  question: string;
  answer: string;
}

// FaqItemPropsの配列
export type FaqListType = {
  faqList: FaqItemType[];
}

const FaqJsonLd: React.FC = () => {
  const [faqList, setFaqList] = useState<FaqListType>({ faqList: [] });
  const [hasFaq, setHasFaq] = useState(false);

  useEffect(() => {
    const faqHtmlElement = document.getElementById("faqList");

    if (faqHtmlElement !== null) {
      const convertHtmlToJson = (faqHtmlElement: HTMLElement) => {
        const faqElements = faqHtmlElement.querySelectorAll('dt');

        const newFaqList: FaqListType = { faqList: [] };
        faqElements.forEach((element, index) => {
          const question = element.textContent?.trim() || '';
          const answer = element.nextElementSibling?.textContent?.trim() || '';
          newFaqList.faqList.push({ id: `faq-${index + 1}`, question, answer });
        });

        return newFaqList;
      };

      // Get Faq data
      const faqData = convertHtmlToJson(faqHtmlElement);
      setFaqList(faqData);
      setHasFaq(true);
    }
  }, []);

  // Generate JSON-LD data from FAQ data
  const generateJsonLd = (faqList: FaqItemType[]) => {
    const jsonData = {
      "@context": "http://schema.org",
      "@type": "FAQPage",
      "mainEntity": [] as Array<{
        "@type": string;
        name: string;
        acceptedAnswer: {
          "@type": string;
          text: string;
        };
      }>,
    };

    faqList.forEach((item, index) => {
      const question = {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      };

      jsonData.mainEntity.push(question);
    });

    return JSON.stringify(jsonData);
  };

  // Generate JSON-LD data
  const jsonLdData = generateJsonLd(faqList.faqList);

  // Rendering JSON-LD
  return (
    <>
      {hasFaq ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdData }} />
      ) : null}
    </>
  );
};

export default FaqJsonLd;

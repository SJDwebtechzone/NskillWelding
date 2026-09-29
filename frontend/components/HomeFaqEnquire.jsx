'use client';

import FaqSection from './FaqSection';

export default function HomeFaqEnquire({ faqs }) {
  return (
    <>
      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
      <FaqSection customFaqs={faqs} />
    </>
  );
}

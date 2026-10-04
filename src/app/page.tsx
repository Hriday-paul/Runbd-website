

import Section1 from "@/components/Home/Section1/Section1";
import Section2 from "@/components/Home/Section2/Section2";
import Section3 from "@/components/Home/Section3/Section3";
import Section4 from "@/components/Home/Section4/Section4";

export default async function Home() {
  // const jsonLd = gen_JsonLdHomePage()
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      
      {/* {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))} */}
    </div>
  );
}

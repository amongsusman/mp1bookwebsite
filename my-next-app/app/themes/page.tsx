"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function Themes() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 font-serif text-white">
      {/* Navbar */}
      <NavBar/>
      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#1: The Will to Escape"
            description="Escape is a notable theme in The Handmaid’s Tale. As a result of the
totalitarian regime, Gilead, established by the Sons of Jacob, women have lost
their individual freedoms and choice. Women are forced into certain roles to
“better” the society. As a result of them losing freedom, many of these women
find themselves choosing different options to escape their restricted lives.
However, real escape is often unreachable just by pure determination in a
totalitarian regime."
            bullets={[
              "The Underground Femaleroad - families living in homes along a path help women who desire to escape Gilead for freedom (Moira tried, but got caught)",
              "Moira’s outrage - Moira outrages over her new forced life in bearing children for Commanders, and she wishes to leave the Red Center (she did, but got placed in a Jezebel later on)",
              "Offred’s Predecessor - commits suicide and even writes a message in Latin to Offred to show the shared feeling of women in Gilead to escape through death",
            ]}
            imageSrc="/handmaids-tale-season-2-ep-3.webp"
            caption="Source: Variety"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#2: A Sense of Community"
            description="Even though freedom is limited for women in Gilead, there is still a feeling
of community and shared feelings. In a society where women are forced into tasks
depending on their role, they often empathize over their shared pain and trauma.
Community is sometimes the only aspect of Gilead’s society that makes life
bearable for its citizens. However, community is still very much limited in Gilead
due to social class division for both men and women, limited communication
between individuals, and limited freedom to assemble in groups."
            bullets={[
              "Offred and Ofglen’s relationship - both women are Handmaids who have to do their daily trips to the market together, finding a bond in this forced routine",
              "Resistance Movement - many people in Gilead share the feeling to leave Gilead forever for freedom, helping each other to escape (Underground Femaleroad)",
              "Jezebel Club - the Commanders of Gilead share enjoyment from the superficial entertainment provided by the women that chose to be put there",
            ]}
            imageSrc="/30handmaid-recap-articleLarge.webp"
            caption="Source: The New York Times"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#3: A Feministic Approach"
            description="Feminism is one of the main themes in The Handmaid’s Tale since it
appears everywhere in regards to the portrayal of oppressed women in the novel.
Women in the novel are clearly shown as less than the men in the society, as the
Commanders are at the top of the social class ladder and have a lot of control over
the women that work in their households. As a result of showing women as less
equal, Atwood advocates for a society where women have equal rights and have
much more freedom than what they have in Gilead."
            bullets={[
              "The Reproductive Right - women in Gilead do not have the ability to choose when they want to have children (bodily autonomy), demonstrating that a better world would be a world with women having rights to their own bodies",
              "The Working Right - instead of working 9-5 jobs or starting a business, women only have a few roles: being a Martha (housework), Handmaid (bearer of children), Jezebels (prostitutes for the elite), etc, showing how totalitarian regimes can prevent women from working in the fields they want to work in",
              "The Right to Read & Write - to limit their power and prevent their understanding of written their text, Gilead does not allow women to read or write, hoping that they will comply with the restrictions on the daily lives of women, highlighting the complete control of a totalitarian government over what women know and do not know",
            ]}
            imageSrc="/ca-times.brightspotcdn.jpg"
            caption="Source: Los Angeles Times"
          />
        </div>
      </section>
    </main>
  );
}
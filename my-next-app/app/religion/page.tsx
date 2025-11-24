"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function ReligiousConnections() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 font-serif text-white">
      {/* Navbar */}
      <NavBar/>
      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Religious Connections"
            description="The Handmaid’s Tale is a novel with a lot of biblical connections due to its society
being a theocracy. Gilead uses extreme religious statements in the Bible to justify the
laws set in place. A society based heavily on religious figures and events is bound to have
direct references to the Bible. Here are some examples of biblical references in The
Handmaid’s Tale that you may have not picked up on:"
            imageSrc="/19_0503_BIBLE_Open-Secrets-What-I-Found-When-I-Found-the-Bible_1021x640-696x436.jpg"
            caption="Source: Outreach Magazine"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Jezebel"
            description="the promiscuous, manipulative, and wicked wife of Ahab in the Bible
(relating to the promiscuous outfits that the prostitutes wear in the Jezebel
nightclub)"
            imageSrc="/how-bad-was-jezebel-01.jpg"
            caption="Source: Biblical Archaeology Society"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Sons of Jacob"
            description="Jacob’s twelve sons in the Bible, who were born from the
handmaids of Rachel and Leah (relating to the extremist group, who supported the
idea of women being Handmaids, that overthrew the U.S. government, forming
Gilead)"
            imageSrc="/jacob_blessing_his_sons.jpeg"
            caption="Source: The Church of Jesus Christ of Latter-Day Saints"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Rachel and Leah"
            description="two Biblical sisters and both the wives of Jacob, used
handmaids to help them bear children (relating to the official name of the Red
Center where women are taught to be Handmaids)"
            imageSrc="/Dantes_Vision_of_Rachel_and_Leah_2.jpeg"
            caption="Source: Biblical Archaeology Society"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Gilead"
            description="a place of refuge and healing for the Israelites in the Bible, also a very
fertile region (name of the totalitarian society with a twisted interpretation of the
Bible, meant to “heal” society from nuclear fallout and a fertility issue)"
            imageSrc="/Locator-map-Gilead.webp"
            caption="Source: Britannica"
          />
        </div>
      </section>
    </main>
  );
}
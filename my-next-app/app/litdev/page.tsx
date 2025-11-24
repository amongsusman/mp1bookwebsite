"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard"
import { motion } from "framer-motion";

export default function LiteraryDevices() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 font-serif text-white">
      {/* Navbar */}
      <NavBar/>
      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#1: Allusion"
            description="Allusions are very common in The Handmaid’s Tale, whether they are
historical or biblical. Atwood uses these allusions to give the characters in her
novel a story and to move the plot forward. She also uses allusions for inspiration
for her dystopian society."
            bullets={[
              "The Underground Femaleroad - a reference to the Underground Railroad, which was a collection of secret routes to help slaves escape, similar to the secret routes to help women escape the harsh reality of living in a totalitarian society like Gilead",
              "The Handmaid’s Tale - the title itself is a reference to Geoffrey Chaucer’s The Canterbury Tales, where each tale was a satirical story used to criticize society told by a fictional pilgrim making their way to Canterbury (just like how Offred’s story as a Handmaid criticizes totalitarian societies)",
            ]}
            imageSrc="/the-canterbury-tales-feathers-classics.jpg"
            caption="Source: Kobo"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#2: Symbolism"
            description="Symbolism is a key element in The Handmaid’s Tale due to it representing
aspects of Gilead and its citizens. The main place where symbolism is found is the
clothing that both men and women wear in Gilead. The color and components of
their clothing gives the reader a good idea of the social classes and their roles in
Gilead."
            bullets={[
              "Handmaid’s Clothing - the red dresses that the Handmaids wear, representative of blood and menstruation, things related to pregnancy and their role to bear children for the Commanders in Gilead (through the Ceremony)",
              "Handmaid’s Veil - the white veil that goes around the face which the Handmaids in Gilead wear, represents the suppression of women and communication in Gilead, the veil prevents them from seeing / talking to other people",
              "Commander’s Clothing - the rich black uniforms that Commanders wear in Gilead, representative of their high status and power over the women in Gilead (black uniforms are similar to fancy suits/tuxedos)",
            ]}
            imageSrc="/Feature.avif"
            caption="Source: Collider"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="#3: Flashbacks"
            description="Perhaps the most notable literary devices found in The Handmaid’s Tale
are flashbacks. Atwood uses sudden flashbacks to emphasize the major events
that occurred before and during the period where Gilead was first established, as
well as the memories that Offred tries to hold on to (which is one of the only
things that she has left to pass time). Many of these powerful flashbacks
exemplify the loss of freedom and individuality in a totalitarian society."
            bullets={[
              "Attempt to Escape - there is a sudden flashback to when Offred, Luke, and their daughter tried to escape and got separated because of it (later forcing Offred to become a Handmaid), showing how the government of Gilead did not give them the freedom to leave Gilead",
              "Moira’s Experience at the Red Center - when Offred shares her flashback of Moira’s extreme desire to leave the Red Center but cannot without doing it illegally (she was forced into there), it demonstrates a lack of freedom for women to do what they want in Gilead",
              "What’s Going On? - Offred shares a flashback to when she realized she lost her job at the office & could not use her credit card anymore during the establishment of Gilead, which shows the major limitations on women’s freedom compared to men’s freedom in Gilead",
            ]}
            imageSrc="/25handmaids-2-articleLarge-v2.webp"
            caption="Source: The New York Times"
          />
        </div>
      </section>
    </main>
  );
}
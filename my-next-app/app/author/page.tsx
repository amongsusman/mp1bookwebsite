"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function AboutAuthor() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 font-serif text-white">
      {/* Navbar */}
      <NavBar/>
      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="About the Author"
            description="Margaret Atwood is a poet and fiction writer that has published many pieces of
writing throughout her lifetime. Other than The Handmaid’s Tale, she published many
other novels such as Oryx and Crake, Alias Grace, and The Blind Assassin. During her
early life, she would live in two places, living in both places due to her main home being
in Toronto and her father doing research in northern Canada. Later on, she got her
master’s degree in English literature. While living in West Berlin, Atwood published The
Handmaid’s Tale, a reflection of her feminist views and negative views of totalitarianism."
            imageSrc="/170417_r29746.webp"
            caption="Source: The New Yorker"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="What's next for you? Read The Testaments."
            description="The Testaments is the sequel to The Handmaid’s Tale. The novel takes place
fifteen years after Offred’s experience in Gilead. It brings the reader back to the
same oppressive, totalitarian regime of The Handmaid’s Tale, but three characters
narrate the novel instead: Aunt Lydia, Agnes Jemima, and Daisy. Each
perspective of Gilead provides the reader with even more insight on how life is
like."
            imageSrc="/51n88CSimVL._SL500_.jpg"
            caption="Source: Audible"
          />
        </div>
      </section>
    </main>
  );
}
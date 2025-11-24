"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";

export default function HistoricalContext() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-green-300 via-green-500 to-green-700 font-serif text-white">
      {/* Navbar */}
      <NavBar/>
      {/* Main content */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Historical Inspirations"
            description="Although The Handmaid’s Tale is mostly based on extreme fundamentalist views
of the Bible, many parts of the society are based on other historical events / time periods.
Ideas of totalitarianism, feminism, and rising Puritanism were all common around the
time when Atwood authored The Handmaid’s Tale. History plays a crucial role in the
functionality / laws of Gilead in the novel. Here are some examples from history that
Atwood based her novel on:"
            imageSrc="/stthomas-history-time.jpg"
            caption="Source: College of Arts and Sciences - University of St. Thomas"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="17th century Puritanism in New England"
            description="the Puritans’ ideology that a society
should be directly based on the Bible and influenced by the practices/ideas within
the Bible (women serve as servants at home for their husbands, the establishment
of a theocracy for the betterment of its citizens *Gilead*)"
            imageSrc="/Puritans-church-snow-Massachusetts-Bay-Colony.webp"
            caption="Source: Britannica"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="WW2 Totalitarian States"
            description="totalitarian states like Nazi Germany, Fascist Italy, and
the Soviet Union served as inspiration for the way that Gilead would function
(oppressive nature, single-party rule *Sons of Jacob*, no individual freedoms)"
            imageSrc="/Adolf-Hitler-rally-Germany-1933.webp"
            caption="Source: Britannica"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Rise of Feminism in the late 1900s"
            description="women fighting as a union for equal rights,
equal pay, right to an abortion, and overall less discrimination in the workplace,
especially those who were LGBTQ+ and of color (shown by the feminist
resistance movement for their rights to work and have choices in their lives)"
            imageSrc="/GettyImages_120385927.webp"
            caption="Source: Vox"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Religious Extremism"
            description="rise of extreme right-wing political groups with religious,
fundamentalistic views, attempting to use exact wording from the Bible to justify
their dislike of the feminist movement & their want to restrict women’s roles in
society (in The Handmaid’s Tale, the Sons of Jacob is the main religious extremist
group that stems from what Atwood experienced in the 1980s)"
            imageSrc="/rchristian-extremism-illo.jpg"
            caption="Source: Politico"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-16">
        <div className="w-full max-w-5xl">
          <InfoCard
            title="Iranian Revolution of 1978-79"
            description="an overthrow of the monarchy in Iran and the
establishment of an Islamic theocracy that later became a totalitarian government
ruled by Abolhassan Bani-Sadr (nearly identical to the transition from the U.S.
government to the theocracy founded by the Sons of Jacob)"
            imageSrc="/166984289_yj3ay8.avif"
            caption="Source: History.com"
          />
        </div>
      </section>
    </main>
  );
}
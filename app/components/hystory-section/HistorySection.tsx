import { useContext } from "react";
import { HistoryContext, HistoryContextData } from "~/context/context";

import BottomBackgroundPattern from "../shared/BottomBackgroundPattern";
import Section from "../shared/Section";
import HistoryChapterIntro from "./HistoryChapterIntro";
import HistoryIntro from "./HistoryIntro";

export default function HistorySection() {
  const initialHistoryContext: HistoryContextData = {
    chapter: 0,
    intro: false,
  };

  return (
    <>
      <HistoryContext.Provider value={initialHistoryContext}>
        <Section>
          <HistoryIntro />
        </Section>
        <Section>
          <BottomBackgroundPattern />
          <HistoryChapterIntro />
        </Section>
      </HistoryContext.Provider>
    </>
  );
}

interface Chapter {
  intro: ChapterIntro;
  content: ChapterContent;
}

interface ChapterIntro {
  textMonth: string;
  textYear: string;
  title: string;
}

interface ChapterContent {
  title: string;
  text: string;
}

const chapters: Chapter[] = [
  {
    intro: {
      textMonth: "juhlo",
      textYear: "2018",
      title: "Parabéns",
    },
    content: {
      title: `"Parabéns"`,
      text: "foi a primeira mensagem que iniciou uma inocente e curiosa troca de frases e pensamentos simples... E a partir daí, não paramos mais!",
    },
  },
  {
    intro: {
      textMonth: "ainda",
      textYear: "2018",
      title: "Parabéns",
    },
    content: {
      title: `O novo normal`,
      text: `A distância e o fuso horário (Ele na Itália e Ela no Brasil) não podiam ser uma barreira. Correr para casa após o trabalho para se verem através de uma tela de computador ou telefone havia se tornado o novo "normal".`,
    },
  },
];

export interface Chapter {
  intro: ChapterIntro;
  content: ChapterContent;
}

export interface ChapterIntro {
  textMonth: string;
  textYear: string;
  title: string;
}

export interface ChapterContent {
  title: string;
  image: string;
  text: string;
}

export const chapters: Chapter[] = [
  {
    intro: {
      textMonth: "juhlo",
      textYear: "2018",
      title: "Parabéns",
    },
    content: {
      title: `"Parabéns"`,
      image: "history-content-chap0",
      text: "Foi a primeira mensagem que iniciou uma inocente e curiosa troca de frases e pensamentos simples... E a partir daí, não paramos mais!",
    },
  },
  {
    intro: {
      textMonth: "ainda",
      textYear: "2018",
      title: "O novo normal ",
    },
    content: {
      title: `O novo normal`,
      image: "history-content-chap1",
      text: `A distância e o fuso horário (Ele na Itália e Ela no Brasil) não podiam ser uma barreira. Correr para casa após o trabalho para se verem através de uma tela de computador ou telefone havia se tornado o novo "normal".`,
    },
  },
  {
    intro: {
      textMonth: "dezembro",
      textYear: "2018",
      title: "Tick... Tock...",
    },
    content: {
      title: `O momento estava chegando`,
      image: "history-content-chap2",
      text: `Quarto tudo pronto e arrumado, um novo guarda-roupa, porque logo novas roupas ocupariam as gavetas. Todos no trabalho sabiam sobre o bendito príncipe que estava chegando e ela também…`,
    },
  },
  {
    intro: {
      textMonth: "dezembro",
      textYear: "2018",
      title: "O avião branco",
    },
    content: {
      title: `O avião branco`,
      image: "history-content-chap3",
      text: `O cavalo do bendito príncipe não era branco mas o avião que o acompanhou sim… Finalmente em Pato Branco, o estacionamento de ônibus (chegada com direito a), balões vermelhos, os corações pulando e batendo... Foi a primeira vez que nossos olhos se encontraram ao vivo.`,
    },
  },
  {
    intro: {
      textMonth: "novembro",
      textYear: "2021",
      title: "È hora!!!",
    },
    content: {
      title: `È hora!!!`,
      image: "history-content-chap4",
      text: `Já se passaram quase três anos e alguns kilos desde o nosso primeiro encontro. Muitas coisas mudaram, mas a paixão permaneceu forte além da adversidade e o amor cresce a cada dia. Mas não era suficiente, o nosso amor será eterno. Nós prometemos.`,
    },
  },
  {
    intro: {
      textMonth: "21 MAIO",
      textYear: "2021",
      title: "Casamento!!!",
    },
    content: {
      title: `Casamento!!!`,
      image: "history-content-chap5",
      text: `Nossa cerimonia será diferente do programado a alguns meses, íntimo e discreto, juntos as familhas. Mas queremos compartilhar esse momento tão importante para nós com você no almoço que será servido na Chacara Zanin.`,
    },
  },
];
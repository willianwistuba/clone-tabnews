import { useState } from "react";
import Head from "next/head";

const frases = [
    "Acredite nos seus sonhos e corra atrás deles.",
    "Seja a mudança que você quer ver no mundo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é uma jornada, não um destino.",
    "Não deixe para amanhã o que você pode fazer hoje.",
    "Tudo que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "O segredo do sucesso é a constância do propósito.",
    "O sucesso não é final, o fracasso não é fatal: o que conta é a coragem de seguir em frente.",
    "O fracasso é uma oportunidade para começar de novo, com mais inteligência.",
    "Não espere por oportunidades, crie-as.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    "Só existe um êxito: a capacidade de levar a vida que se quer.",
    "Quem não tem confiança não tem nada.",
    "Hoje é um dia desafiador, mas você tem a força necessária para superar qualquer obstáculo.",
    "Não tenha medo de pedir ajuda quando precisar. As pessoas ao seu redor estarão dispostas a te apoiar.",
    "Seja cuidadoso com as suas palavras hoje, pois elas podem ser mal interpretadas.",
    "Você vai precisar de muita paciência para lidar com as pessoas ao seu redor hoje.",
    "Mantenha uma mente aberta hoje e esteja disposto a aprender com as pessoas ao seu redor.",
    "Este é um bom momento para focar na sua vida amorosa e fazer algo especial para a pessoa que você ama.",
    "Você pode esperar um dia de mudanças e surpresas.",
    "Confie nos seus instintos e siga o seu coração hoje.",
    "É um bom momento para trabalhar em um projeto criativo ou começar a explorar um novo hobby.",
    "Fique aberto a novas oportunidades e experiências hoje. Elas podem te levar a lugares incríveis.",
    "As coisas podem não sair como planejado hoje, mas lembre-se que você tem a capacidade de lidar com isso.",
    "Algumas pessoas ao seu redor podem não estar agindo de forma sincera. Fique atento.",
    "Você pode se sentir um pouco desanimado hoje, mas lembre-se que dias melhores virão.",
    "Não confie em todas as informações que receber hoje. Algumas podem ser falsas ou enganosas.",
    "Este é um momento para se concentrar em si mesmo e não se preocupar tanto com o que as outras pessoas pensam.",
    "Tenha cuidado com quem você confia hoje. Nem todos têm boas intenções.",
    "Não desista dos seus objetivos, mesmo que pareçam difíceis de alcançar hoje.",
    "Algumas coisas podem parecer fora do seu controle hoje, mas mantenha a calma e tente resolver da melhor forma possível.",
    "Preste atenção nos detalhes e não deixe nada passar despercebido hoje.",
    "Você pode se sentir sobrecarregado hoje, mas lembre-se que você é capaz de lidar com isso.",
    "Não se preocupe tanto com o que os outros pensam de você. Seja fiel a si mesmo.",
    "Algumas pessoas ao seu redor podem tentar te desanimar hoje. Não deixe que isso afete a sua confiança.",
    "É um bom momento para refletir sobre o que é realmente importante na sua vida e se concentrar nisso hoje.",
    "Não deixe que as pequenas coisas te incomodem hoje. Mantenha o foco no que é realmente importante.",
    "O seu otimismo vai ser a chave para lidar com as situações complicadas que surgirem hoje.",
    "Fique atento às oportunidades que vão aparecer no seu caminho hoje.",
    "Seja cuidadoso com as suas palavras hoje, pois elas podem ser mal interpretadas.",
    "Hoje é um bom dia para cuidar da sua saúde e bem-estar.",
    "Você pode esperar um dia de mudanças e surpresas.",
    "É um bom dia para refletir sobre os seus objetivos e traçar um plano de ação para alcançá-los.",
    "Você vai precisar de muita paciência para lidar com as pessoas ao seu redor hoje.",
    "O dia pode ser um pouco desafiador, mas você tem a força necessária para superar qualquer obstáculo.",
    "Você vai se sentir mais confiante e determinado a alcançar os seus objetivos hoje.",
    "Não tenha medo de pedir ajuda quando precisar. As pessoas ao seu redor estarão dispostas a te apoiar.",
    "É um bom momento para se concentrar em desenvolver suas habilidades e conhecimentos.",
    "Mantenha uma mente aberta hoje e esteja disposto a aprender com as pessoas ao seu redor.",
    "O seu trabalho árduo e esforço serão recompensados hoje.",
    "Seja gentil e paciente com as pessoas ao seu redor hoje. Isso vai ajudar a criar harmonia e boas vibrações.",
    "Você pode ter uma surpresa agradável hoje que vai trazer um sorriso ao seu rosto.",
    "Este é um bom momento para focar na sua vida amorosa e fazer algo especial para a pessoa que você ama.",
    "Você pode sentir a necessidade de se libertar de alguma situação ou relação que não está te fazendo feliz.",
    "Confie nos seus instintos e siga o seu coração hoje.",
    "É um bom momento para trabalhar em um projeto criativo ou começar a explorar um novo hobby.",
    "Não se preocupe tanto com o futuro. Viva o momento presente e aproveite cada momento.",
    "As suas habilidades de comunicação estarão em destaque hoje. Use-as sabiamente.",
    "Este é um bom momento para perdoar aqueles que te magoaram e deixar ir qualquer ressentimento.",
    "Fique aberto a novas oportunidades e experiências hoje. Elas podem te levar a lugares incríveis.",
    "Mantenha uma atitude positiva e otimista hoje. Isso vai atrair coisas boas para a sua vida.",
    "Confie em si mesmo e acredite que você é capaz de alcançar tudo o que deseja.",
    "Acredite nos seus sonhos e corra atrás deles.",
    "Seja a mudança que você quer ver no mundo.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nunca é tarde demais para ser quem você poderia ter sido.",
    "Não deixe para amanhã o que você pode fazer hoje.",
    "Acredite em si mesmo e todo o resto se encaixará.",
    "Não é o que você olha que importa, é o que você vê.",
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "Tudo o que você sempre quis está do outro lado do seu medo.",
    "Não desista, pois é isso que eles querem que você faça.",
    "Se você não gosta de algo, mude. Se você não pode mudar, mude sua atitude.",
    "Quando você quer algo, todo o universo conspira a seu favor.",
    "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.",
    "Você não pode ter uma vida positiva e uma mente negativa.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "Acredite nos seus sonhos e corra atrás deles.",
    "Seja a mudança que você quer ver no mundo.",
    "A persistência é o caminho do êxito.",
    "Você nunca é velho demais para definir um novo objetivo ou sonhar um novo sonho.",
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A maior glória em viver não está em nunca cair, mas em levantar-se todas as vezes que for necessário.",
    "Acredite em seu potencial, mesmo que os outros não acreditem.",
    "Faça o que puder, com o que tiver, onde estiver.",
    "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "Lute pelos seus sonhos até que seus ídolos sejam seus concorrentes.",
    "O fracasso é apenas a oportunidade de recomeçar com mais inteligência.",
    "Não é o que nos acontece, mas como reagimos que importa."

];

export default function Home() {
  const [frase, setFrase] = useState("");

  const handleClick = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(frases[indice]);
  };

  return (
    <div className="container">
      <Head>
        <title>Sorte de Hoje</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <div className="container-fluid">
        <button className="btn btn-primary mt-3" onClick={handleClick}>
          Sorte de Hoje
        </button>
        <p className="mt-3">{frase}</p>
      </div>
    </div>
  );
}

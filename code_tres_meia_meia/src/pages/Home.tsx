import { useState } from "react";

import desventuras from "../../src/assets/desventuras.svg";
import harryPotter from "../../src/assets/harryPotter.svg";
import theWitcher from "../../src/assets/theWitcher.svg";

import { BotaoColorido } from "../progresso/Janeiro/dia_4/dia_quatro";
import Contador from "../progresso/Janeiro/dia_8/dia_oito";
import Cronometro from "../progresso/Janeiro/dia_11/dia_onze";
import BarraProgresso from "../progresso/Janeiro/dia_13/dia_treze";
import { CountdownTimer } from "../progresso/Janeiro/dia_15/dia_quinze";
import Slider from "../progresso/Janeiro/dia_18/dia_dezoito";
import GuessingGame from "../progresso/Janeiro/dia_21/dia_vinte_e_um";
import Galeria from "../progresso/Janeiro/dia_22/dia_vinte_e_dois";
import CalculadoraGorjeta from "../progresso/Janeiro/dia_23/dia_vinte_e_tres";
import Formulario from "../progresso/Janeiro/dia_24/dia_vinte_e_quatro";
import ForcaGame from "../progresso/Janeiro/dia_25/ForcaGame";
import TodoList from "../progresso/Janeiro/dia_26/dia_vinte_e_seis";
import ContadorButton from "../progresso/Janeiro/dia_27/dia_vinte_e_sete";
import FormularioComponent, {
  Form,
} from "../progresso/Janeiro/dia_28/dia_vinte_e_oito";
import Calculator from "../progresso/Janeiro/dia_29/dia_vinte_e_nove";
import CarrinhoDeCompras from "../progresso/Janeiro/dia_30/dia_trinta";
import Board from "../progresso/Fevereiro/dia_32/dia_trinta_e_dois";
import ThemeToggle from "../progresso/Fevereiro/dia_33/dia_trinta_e_tres";
import ListaDeCompras from "../progresso/Fevereiro/dia_38/dia_trinta_e_oito";
import VideoGallery from "../progresso/Fevereiro/dia_41/dia_quarenta_e_um";
import AnoBissexto from "../progresso/Fevereiro/dia_42/dia_quarenta_e_dois";
import MediaParOuImpar from "../progresso/Fevereiro/dia_43/dia_quarenta_e_tres";
import Button from "../progresso/Fevereiro/dia_47/button";
import Modal from "../progresso/Fevereiro/dia_47/dia_quarenta_e_sete";
import FactorialCalculator from "../progresso/Fevereiro/dia_50/dia_cinquenta";
import OrdenarNumeros from "../progresso/Fevereiro/dia_51/dia_cinquenta_e_um";
import NavigationBar from "../progresso/Fevereiro/dia_52/dia_cinquenta_e_dois";
import AcerteALetra from "../progresso/Fevereiro/dia_53/dia_cinquenta_e_tres";
import ContactForm from "../progresso/Fevereiro/dia_54/dia_cinquenta_e_quatro";
import ShoppingCart from "../progresso/Fevereiro/dia_55/dia_cinquenta_e_cinco";
import TerceiroGrauCalculator from "../progresso/Fevereiro/dia_56/dia_cinquenta_e_seis";
import RegraDeTres from "../progresso/Fevereiro/dia_57/dia_cinquenta_e_sete";
import EmailValidation from "../progresso/Fevereiro/dia_58/dia_cinquenta_e_oito";
import WordCounter from "../progresso/Fevereiro/dia_59/dia_cinquenta_e_nove";
import EmailForm from "../progresso/Fevereiro/dia_60/dia_sessenta";
import MotivationalButton from "../progresso/Marco/dia_61/dia_sessenta_e_um";
import FrasesButton from "../progresso/Marco/dia_62/dia_sessenta_e_dois";
import Clock from "../progresso/Marco/dia_63/dia_sessenta_e_tres";
import Calendar from "../progresso/Marco/dia_64/dia_sessenta_e_quatro";
import CircularProgress from "../progresso/Marco/dia_65/dia_sessenta_e_cinco";

// import BarChart from "./progresso/Fevereiro/dia_37/dia_trinta_e_sete";

function Home() {
  const [progresso, setProgresso] = useState(0);
  const targetDate = "2024-01-29T00:00:00";

  const imagens = [desventuras, theWitcher, harryPotter];

  const aumentarProgresso = () => {
    if (progresso < 100) {
      setProgresso(progresso + 10);
    }
  };

  const zerarProgresso = () => {
    setProgresso(0);
  };

  const handleCalcularGorjeta = (gorjeta: number, totalPagar: number) => {
    return `Gorjeta: ${gorjeta}, Total a Pagar: ${totalPagar}`;
  };

  const palavraSecreta = "TYPESCRIPT";

  const [contador, setContador] = useState<number>(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleFormSubmit = (form: Form) => {
    console.log("Formulário válido:", form);
  };

  const [result, setResult] = useState<number | null>(null);

  const handleResultChange = (newResult: number | null) => {
    setResult(newResult);
  };

  const itens = [
    { id: 1, nome: "Item 1", preco: 10.99 },
    { id: 2, nome: "Item 2", preco: 5.49 },
    { id: 3, nome: "Item 3", preco: 8.79 },
  ];

  const [isXNext, setIsXNext] = useState(true);

  const handleClickGame = () => {
    setIsXNext(!isXNext);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [factorialResult, setFactorialResult] = useState<number | null>(null);

  const handleFactorialCalculated = (result: number) => {
    setFactorialResult(result);
  };

  // const dataChart = [12, 19, 3, 5, 2, 3];
  // const labelsChart = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div id="root">
      <BotaoColorido />
      <Contador />
      <Cronometro />

      <button onClick={aumentarProgresso}>Aumentar Progresso</button>
      <button onClick={zerarProgresso}>Zerar Progresso</button>
      <BarraProgresso valor={progresso} />

      <h1>Contagem Regressiva</h1>
      <CountdownTimer targetDate={targetDate} />

      <h1>S.L.I.D.E.R.</h1>
      <Slider imagens={imagens} />

      <GuessingGame />
      <Galeria imagens={imagens} />
      <CalculadoraGorjeta onCalcularGorjeta={handleCalcularGorjeta} />
      <Formulario />
      <ForcaGame palavraSecreta={palavraSecreta} />
      <TodoList />
      <ContadorButton onClick={handleClick} contador={contador} />
      <FormularioComponent onSubmit={handleFormSubmit} />
      <Calculator onResultChange={handleResultChange} />

      <div className="result">{result !== null ? `= ${result}` : null}</div>

      <CarrinhoDeCompras itens={itens} />
      <Board onClick={handleClickGame} />
      <ThemeToggle />

      <div>{/* <BarChart data={dataChart} labels={labelsChart} /> */}</div>

      <ListaDeCompras />
      <VideoGallery />
      <AnoBissexto />
      <MediaParOuImpar />

      <div>{/* <ButtonGoTo /> */}</div>

      <div>
        <h1>Meu App</h1>
        <Button onClick={openModal} children="Abrir Modal" />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Olá, eu sou um modal!</h2>
          <p>{`Espero que tenha gostado :)`}</p>
        </Modal>
      </div>

      <div>
        <FactorialCalculator
          onFactorialCalculated={handleFactorialCalculated}
        />
        {factorialResult !== null && (
          <p>O fatorial do número solicitado é: {factorialResult}</p>
        )}
      </div>

      <OrdenarNumeros />
      <NavigationBar />
      <AcerteALetra />
      <ContactForm />
      <ShoppingCart />
      <TerceiroGrauCalculator />
      <RegraDeTres />
      <EmailValidation />
      <WordCounter />
      <EmailForm />
      <MotivationalButton />
      <FrasesButton />
      <Clock />

      <div>
        <h1>Selecione uma data:</h1>
        <Calendar onSelectDate={handleSelectDate} />
        {selectedDate && (
          <p>Data selecionada: {selectedDate.toLocaleDateString()}</p>
        )}
      </div>

      <CircularProgress size={100} progress={50} strokeWidth={6} />
    </div>
  );
}

export default Home;

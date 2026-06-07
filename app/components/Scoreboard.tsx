'use client';

import { useState } from 'react';
import logo from '@/public/logo.png';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Crown } from 'lucide-react';

type RaiseLevel = 1 | 2 | 3 | 4;
type Player = 'nos' | 'eles';

const RAISE_STAGES: Record<
  RaiseLevel,
  { label: string; points: number; next: RaiseLevel }
> = {
  1: { label: 'SEIS!', points: 3, next: 2 },
  2: { label: 'NOVE!', points: 6, next: 3 },
  3: { label: 'DOZE!', points: 9, next: 4 },
  4: { label: 'DOZE!', points: 12, next: 1 },
};

const RAISE_BTN =
  'w-full h-10 self-center bg-indigo-950 text-yellow-400 font-semibold border border-indigo-600 rounded-lg cursor-pointer hover:bg-violet-950 hover:border-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-950/40 disabled:text-yellow-400/40 disabled:border-indigo-600/40';

const CORRER_BTN =
  'w-full h-9 text-sm font-semibold bg-gray-900 text-red-400 border border-red-800 rounded-lg cursor-pointer hover:bg-red-950 hover:border-red-600 disabled:cursor-not-allowed disabled:bg-gray-900/40 disabled:border-red-800/40 disabled:text-red-400/40';

const RODADA_BTN =
  'w-full mt-2 px-1 py-2 text-sm md:text-lg bg-gray-900 border border-gray-500 rounded-lg cursor-pointer';

export function Scoreboard() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);
  const [pendingPoints, setPendingPoints] = useState(1);
  const [raiseLevel, setRaiseLevel] = useState<RaiseLevel>(1);
  const [raiseLabel, setRaiseLabel] = useState('TRUCO!');
  const [winner, setWinner] = useState<Player | null>(null);
  const [lastRaiser, setLastRaiser] = useState<Player | null>(null);

  function resetRaise() {
    setPendingPoints(1);
    setRaiseLevel(1);
    setRaiseLabel('TRUCO!');
    setLastRaiser(null);
  }

  function resetGame() {
    setNos(0);
    setEles(0);
    resetRaise();
  }

  function raise(player: Player) {
    const { label, points, next } = RAISE_STAGES[raiseLevel];
    setPendingPoints(points);
    setRaiseLabel(label);
    setRaiseLevel(next);
    setLastRaiser(player);
  }

  function applyPoints(player: Player, points: number) {
    if (player === 'nos') {
      const total = nos + points;
      setNos(total);
      if (total >= 12) {
        setWinner('nos');
        resetGame();
      }
    } else {
      const total = eles + points;
      setEles(total);
      if (total >= 12) {
        setWinner('eles');
        resetGame();
      }
    }
  }

  function tentoNos() {
    const effective = eles === 11 && pendingPoints === 1 ? 3 : pendingPoints;
    const total = nos + effective;
    setNos(total);
    resetRaise();
    if (total >= 12) {
      setWinner('nos');
      resetGame();
    }
  }

  function tentoEles() {
    const effective = nos === 11 && pendingPoints === 1 ? 3 : pendingPoints;
    const total = eles + effective;
    setEles(total);
    resetRaise();
    if (total >= 12) {
      setWinner('eles');
      resetGame();
    }
  }

  function correr(runner: Player) {
    const raiser: Player = runner === 'nos' ? 'eles' : 'nos';
    const points = pendingPoints - 3 > 0 ? pendingPoints - 3 : 1;
    resetRaise();
    applyPoints(raiser, points);
  }

  const raiseDisabledBase =
    pendingPoints + nos >= 12 || pendingPoints + eles >= 12;

  return (
    <>
      {winner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-[90%] max-w-90 p-6 bg-sky-950 border-2 border-sky-700 rounded-xl shadow-xl flex flex-col gap-4">
            <Alert className="flex flex-col bg-teal-950 border-2 border-teal-800">
              <div className="flex flex-row items-center justify-between">
                <Crown color="gold" className="size-6" />
                <AlertTitle className="flex text-yellow-300 h-8 text-lg items-end-safe">
                  {winner === 'nos' ? 'NÓS GANHAMOS!' : 'ELES GANHARAM!'}
                </AlertTitle>
                <Crown color="gold" className="size-6" />
              </div>
              <AlertDescription className="text-sm text-center text-gray-200 my-1">
                {winner === 'nos'
                  ? 'Parabéns! Nós fomos melhores dessa vez!'
                  : 'Parabéns! Eles foram melhores dessa vez!'}
              </AlertDescription>
            </Alert>
            <button
              className="w-full h-10 bg-indigo-950 text-yellow-400 font-semibold border-2 border-indigo-700 rounded-lg cursor-pointer"
              onClick={() => setWinner(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      <div className="w-full md:w-2xl h-fit bg-sky-950 border-2 border-sky-800 justify-items-center rounded-lg shadow-md p-4 md:p-8">
        <div className="flex flex-row w-full md:w-[90%] justify-between gap-3 md:gap-6 items-center">
          <img src={logo.src} alt="Logo" className="w-fit h-16" />
          <div className="w-fit px-4 py-2 bg-gray-900 rounded-2xl border-2 border-gray-700 shadow-md">
            <h1 className="text-2xl text-center md:text-4xl text-teal-300">
              Marcador de Truco
            </h1>
          </div>
          <img src={logo.src} alt="Logo" className="w-fit h-16" />
        </div>

        <div className="flex flex-col mt-10 text-xl w-full md:w-[90%] items-center">
          <div className="grid grid-cols-3 gap-4 w-full text-center">
            <button
              className={`${RODADA_BTN} text-emerald-400 hover:bg-emerald-950 hover:border-emerald-600`}
              onClick={tentoNos}
            >
              Rodada Nossa
            </button>
            <button
              className={`${RODADA_BTN} text-sky-400 hover:bg-blue-950 hover:border-blue-600`}
              onClick={resetGame}
            >
              Zerar
            </button>
            <button
              className={`${RODADA_BTN} text-cyan-400 hover:bg-cyan-950 hover:border-cyan-600`}
              onClick={tentoEles}
            >
              Rodada Deles
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-8 mt-6 w-full justify-items-center text-center">
            <p className="w-full text-green-500 self-center text-2xl font-black">
              {nos}
            </p>
            <p className="w-full text-sky-300 self-center text-sm md:text-xl">
              Valendo: {pendingPoints}
            </p>
            <p className="w-full text-cyan-400 self-center text-2xl font-black">
              {eles}
            </p>

            {lastRaiser && (
              <>
                <button
                  className={CORRER_BTN}
                  disabled={lastRaiser === 'nos'}
                  onClick={() => correr('nos')}
                >
                  Correr
                </button>
                <div />
                <button
                  className={CORRER_BTN}
                  disabled={lastRaiser === 'eles'}
                  onClick={() => correr('eles')}
                >
                  Correr
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[90%] mt-8 items-center">
          <div className="flex flex-row gap-10 w-full justify-between">
            <button
              className={RAISE_BTN}
              onClick={() => raise('nos')}
              disabled={raiseDisabledBase || lastRaiser === 'nos'}
            >
              {!raiseDisabledBase && lastRaiser !== 'nos' ? raiseLabel : 'NÓS'}
            </button>
            <button
              className={RAISE_BTN}
              onClick={() => raise('eles')}
              disabled={raiseDisabledBase || lastRaiser === 'eles'}
            >
              {!raiseDisabledBase && lastRaiser !== 'eles'
                ? raiseLabel
                : 'ELES'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

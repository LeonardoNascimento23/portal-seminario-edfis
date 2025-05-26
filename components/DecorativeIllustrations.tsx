'use client';

import Image from 'next/image';

export default function DecorativeIllustrations() {
  return (
    <>
      {/* Ilustração 1 - Canto superior direito */}
      <div className="absolute top-20 right-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_goal_rulh.svg"
          alt="Ilustração de objetivo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 2 - Canto inferior esquerdo */}
      <div className="absolute bottom-20 left-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_teaching_58yg.svg"
          alt="Ilustração de ensino"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 3 - Meio superior */}
      <div className="absolute top-40 left-1/3 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_fitness-stats_uk0g.svg"
          alt="Ilustração de estatísticas de fitness"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 4 - Meio inferior */}
      <div className="absolute bottom-40 right-1/3 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_athletes-training_koqa.svg"
          alt="Ilustração de atletas treinando"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 5 - Canto superior esquerdo */}
      <div className="absolute top-20 left-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_personal-trainer_bqkg.svg"
          alt="Ilustração de personal trainer"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 6 - Meio direito */}
      <div className="absolute top-1/2 right-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_morning-workout_73u9.svg"
          alt="Ilustração de treino matinal"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 7 - Meio esquerdo */}
      <div className="absolute top-1/2 left-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_track-and-field_i2au.svg"
          alt="Ilustração de atletismo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 8 - Canto inferior direito */}
      <div className="absolute bottom-20 right-0 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_basketball_40ga.svg"
          alt="Ilustração de basquete"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 9 - Meio superior esquerdo */}
      <div className="absolute top-1/3 left-1/4 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_bike-ride_ba0o.svg"
          alt="Ilustração de passeio de bicicleta"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 10 - Meio superior direito */}
      <div className="absolute top-1/3 right-1/4 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_game-day_m63l.svg"
          alt="Ilustração de dia de jogo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 11 - Meio inferior esquerdo */}
      <div className="absolute bottom-1/3 left-1/4 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_homerun_n1g7.svg"
          alt="Ilustração de home run"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Ilustração 12 - Meio inferior direito */}
      <div className="absolute bottom-1/3 right-1/4 w-1/4 opacity-20 pointer-events-none" style={{ zIndex: 5 }}>
        <Image
          src="/images/undraw_skateboarding_4naf.svg"
          alt="Ilustração de skateboarding"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </>
  );
} 
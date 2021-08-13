import React from "react";
import s from "/src/styles/pages/game/index.module.css";
import Image from "next/image";
import grass from "/public/field/grass.png";
import hero from "/public/charactors/hero/0.png";
import { useState } from "react";

type Props = {};
const App: React.FC = (props: Props) => {
  //フィールド
  const field: Array<Array<number>> = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  //プレイヤー
  const [player, setPlayer] = useState({
    location: { x: 4, y: 10 },
    image: <Image src={hero} alt="勇者" width={64} height={64} />,
  });
  //画面
  return (
    <div className={s.field}>
      {field.map((row, y) => (
        <div key={y} className={s.row}>
          {row.map((mass, x) => (
            /* マスの表示 */
            <div
              key={x}
              className={s.mass}
              onClick={() => {
                setPlayer({ ...player, location: { x, y } });
              }}
            >
              {/* 背景 */}
              <div className={s.massItem}>
                <Image src={grass} alt="草" width={64} height={64} />
              </div>
              {/* プレイヤー */}
              {x == player.location.x && y == player.location.y && (
                <div className={s.massItem}>{player.image}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;

import React from "react";
import { useSelector } from "react-redux";
import ButtonAddCarts from "../buttonAddCarts";
import styles from "../descripcion/index.module.css";

export default function Descripcion() {
  const game = useSelector((state) => state.Details);
  console.log(game, "game");
  return (
    <div className={styles.containerpadre}>
      <div className={styles.colum1}>
        <div>
          <h1>Description of game</h1>
          <p>
            {game.description
              ? game.description
              : "Set during the World War II, this isometric tactic game offers the player to lead an Allied commando squad through a series of secret military operations. The game was inspired by war movies like Bridge on the River Kwai and Saving Private Ryan, and some missions are set at the background of the real events shown in this films, such as the Battle of Normandy. There are ten main missions, not counting tutorial, and ten bonus missions are unlocked after you complete the storyline. Most missions require sneaking, camouflaging, and stealth action. The maps are not covered by the fog of war, so you can study them beforehand to thoroughly plan the squad’s movements. For each mission, you're given a predetermined set of characters. Each member of the squad is named after his or her specialization, such as Sniper, Diver, or Seductress, and has a set of unique abilities and a colorful personality. Spy, for example, can disguise himself as an enemy officer to send the guards away, while Sapper can set and disable landmines. Most characters are from the original Commandos, but there are also new members, such as a sneaky Thief and Whiskey, the squad’s bull terrier. The variety of characters’ skills was also increased to make them more versatile."}
          </p>
        </div>
        <h1> Categories </h1>
        <div className={styles.containerCategoriesGames}>
          {game.genres?.map((genre, index) => (
            <p key={index}>{genre.name}</p>
          ))}
        </div>

        {/* <div className={styles.containerfooter}>
            <div className={styles.copyright}>{game.name}</div>
            <div className={styles.information}>
              <h1 className={styles.price}>{game.price + "$"}</h1>
              <ButtonAddCarts nameGame={game} />
            </div>
          </div> */}
      </div>

      <div className={styles.colum3}>
        <h1> Requirements </h1>

        <div className={styles.row2}>
          <p>
            {game.requirements_rec
              ? game.requirements_min
              : "Rec: OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10 64-bit Processor: Intel Core i5 or equivalent Memory: 4 GB RAM Graphics: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or higher DirectX: Version 11 Storage: 25 GB available space Additional Notes: Minimum requirements may change during development."}
          </p>
          <p>
            {game.requirements_rec
              ? game.requirements_rec
              : "Minimum: OS: Windows 7 SP1 64-bit or Windows 8.1 64-bit or Windows 10 64-bit Processor: Intel Core i5 or equivalent Memory: 4 GB RAM Graphics: NVIDIA® GeForce® GTX 550 or ATI™ Radeon™ HD 6XXX or higher DirectX: Version 11 Storage: 25 GB available space Additional Notes: Minimum requirements may change during development."}
          </p>
        </div>
      </div>
    </div>
  );
}

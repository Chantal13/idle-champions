import { getHeroes, parseSeats } from "../utils/getHeroes";

import styles from "./page.module.css";

// https://ps22.idlechampions.com/~idledragons/post.php?call=getuserdetails&instance_key=1&mobile_client_version=547&user_id=99543&hash=8843f90c49fe1d028ecd93c3a6f610f4
// https://ps22.idlechampions.com/~idledragons/post.php?call=getcampaigndetails&game_instance_id=1&instance_id=1&mobile_client_version=547&user_id=99543&hash=8843f90c49fe1d028ecd93c3a6f610f4
// https://ps22.idlechampions.com/~idledragons/post.php?call=getallformationsaves&user_id=99543&hash=8843f90c49fe1d028ecd93c3a6f610f4&instance_id=1391829696&mobile_client_version=547
// https://ps21.idlechampions.com/~idledragons/post.php?call=getDefinitions

const Landing = async () => {
  const heroes = await getHeroes();
  const seats = parseSeats(heroes);

  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.title}>Champions:</h1>
        <section>
          <h2 className={styles.subHeading}>Seats:</h2>
          <ul className={styles.seats}>
            {seats.map((seat) => {
              return (
                <li className={styles.seat} key={seat.id}>
                  <h3 className={styles.seatNumber}>{seat.id}</h3>
                  <ul className={styles.heroes}>
                    {seat.heroes.map(
                      ({ game_instance_id, id, name, owned }) => {
                        return (
                          <li
                            className={
                              owned
                                ? game_instance_id
                                  ? styles.usedHero
                                  : styles.ownedHero
                                : styles.unOwnedHero
                            }
                            key={id}
                          >
                            {name}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Landing;

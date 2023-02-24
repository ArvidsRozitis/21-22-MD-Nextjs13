import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="about__page">
      <h1 className="about__heading--h1">Discover delicious foods</h1>
      <h2 className="about__heading--h2">
        Bringing the Best of Home Cooking to Your Screens: Our Mission to Share
        Mouth-Watering Recipes and Culinary Tips
      </h2>
      <div className="about__info--container">
        <div className="about__image">
          <Image
            src="https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?b=1&s=170667a&w=0&k=20&c=AV3FYwt6ya5VvVwK4x5tMEx2l1QHsv_n0arEHbLk2e0="
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="about__info--container">
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="about__image">
          <Image
            src="https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?b=1&s=170667a&w=0&k=20&c=AV3FYwt6ya5VvVwK4x5tMEx2l1QHsv_n0arEHbLk2e0="
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="about__info--container">
        <div className="about__image">
          <Image
            src="https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?b=1&s=170667a&w=0&k=20&c=AV3FYwt6ya5VvVwK4x5tMEx2l1QHsv_n0arEHbLk2e0="
            alt="Picture of the author"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
}

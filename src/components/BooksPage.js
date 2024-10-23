import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BookPage.css";
import bannerImage from "./banner2.png";

const BookPage = () => {
  const [typedText, setTypedText] = useState("");
  const [cursorClass, setCursorClass] = useState("cursor");

  const textArray = ["AnyWhere", "AnyTime"];

  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorClass.includes("typing")) setCursorClass("cursor typing");
      setTypedText(
        (prev) => prev + textArray[textArrayIndex].charAt(charIndex)
      );
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setCursorClass("cursor");
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      if (!cursorClass.includes("typing")) setCursorClass("cursor typing");
      setTypedText((prev) => prev.substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      setCursorClass("cursor");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  };

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    <div className="book-page">
      <h1 className="page-title">Discover the Wisdom of the Bhagavad Gita</h1>
      <blockquote>
        <div className="container">
          <p>
            Bhagavad Gita - <span className="typed-text">{typedText}</span>
            <span className={cursorClass}>&nbsp;</span>
          </p>
        </div>
      </blockquote>
      <div className="image-container">
        <img
          src={bannerImage}
          alt="Srimad Bhagavad Gita"
          className="bhagavad-gita-image"
        />
        <Link to="/summary" className="read-button">
          READ IT
        </Link>
      </div>

      <div className="chapter-buttons">
        <h2>Explore the Chapters</h2>
        <div className="button-container">
          <Link to="/chapter1" className="chapter-button">
            Chapter 1
          </Link>
          <Link to="/chapter2" className="chapter-button">
            Chapter 2
          </Link>
          <Link to="/chapter3" className="chapter-button">
            Chapter 3
          </Link>
          <Link to="/chapter4" className="chapter-button">
            Chapter 4
          </Link>
          <Link to="/chapter5" className="chapter-button">
            Chapter 5
          </Link>
          <Link to="/summary" className="chapter-button">
            View All
          </Link>
        </div>
      </div>

      <div className="about-gita card">
        <h2>About Bhagavad Gita</h2>
        <p>
          Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a
          practical guide to one's life that guides one to reorganize their
          life, achieve inner peace and approach the Supreme Lord (the Ultimate
          Reality). It is a 700-verse text in Sanskrit which comprises chapters
          23 through 40 in the Bhishma-Parva section of the Mahabharata.
        </p>
        <p>
          The Bhagavad Gita is a dialogue between Arjuna, a supernaturally
          gifted warrior and his guide and charioteer Lord Krishna on the
          battlefield of Kurukshetra. As both armies stand ready for the battle,
          the mighty warrior Arjuna, on observing the warriors on both sides
          becomes overwhelmed with grief and compassion due to the fear of
          losing his relatives and friends and the consequent sins attributed to
          killing his own relatives. So, he surrenders to Lord Krishna, seeking
          a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18
          chapters, Gita packs an intense analysis of life, emotions and
          ambitions, discussion of various types of yoga, including Jnana,
          Bhakti, Karma and Raja, the difference between Self and the material
          body as well as the revelation of the Ultimate Purpose of Life.
        </p>
      </div>

      <div className="srimad-bhagavad-gita-section card">
        <h2>Srimad Bhagavad Gita - Song of God</h2>
        <p>
          The Bhagavad Gita, or the Song of the Lord, is a dialogue between
          Krishna, an incarnation of Vishnu, and his friend and disciple,
          Arjuna. This dialogue takes place in the Bhishma Parva of the
          Mahabharata. The Bhagavad Gita is composed of 701 Shlokas (verses)
          arranged in 18 chapters. It is one of the best-known philosophical
          texts of Hinduism and is said to contain the essence of Upanishadic
          thought.
        </p>
        <p>
          The Bhagavad Gita occurs just before the great battle of Mahabharata
          begins. The army mustered by the five Pandava brothers was to fight
          the battle against the army of the Pandava’s cousin, Duryodhana, who
          had robbed them of their rightful kingdom and further refused to
          participate in any plans for a compromise. After making all possible
          attempts to peacefully get back their kingdom, or even the right to
          own a mere five villages in the kingdom, the Pandava brothers decided
          to fight a war to gain justice.
        </p>
        <p>
          Arjuna, the third of the five Pandava princes, was perhaps the
          greatest and most renowned warrior-hero in the Pandava army. Before
          the battle began, both Duryodhana and Arjuna went to Krishna to seek
          his aid. Krishna said that he would not personally lift weapons and
          fight in the battle, but the cousins could choose to have him,
          unarmed, on their side, or to have the use of his large army. Arjuna
          chose to have Krishna with him, and Duryodhana was delighted to add
          the vast, skilled army of Krishna to his forces. Krishna agreed to
          drive Arjuna’s chariot and thus be with him throughout the battle.
        </p>
        <p>
          Just before the fighting commenced, Arjuna asked Krishna to place his
          chariot between the two armies, so that he could take a good look at
          his enemy. In the enemy ranks, Arjuna saw his cousins, other
          relatives, and his teachers. At this crucial moment, Arjuna’s
          attachment to his preceptors and family came to the fore, and doubt
          entered his mind as to the ‘rightness’ of the battle. In his
          confusion, he no longer knew the course of action that he should take
          and he turned to Krishna for guidance. Krishna talked to him, helping
          him to examine his own motives and desires, and showing him ways to
          rise above the limitations of his own personality to do what was best
          for himself and good for society. This dialogue between Krishna and
          Arjuna is the Bhagavad Gita.
        </p>
        <p>
          The eighteen chapters of the Bhagavad Gita are classified as ‘Yogas’,
          starting with the ‘yoga’ of Arjuna’s depression and ending with the
          Yoga of ‘liberation through renunciation’.
        </p>
      </div>

      <div className="verse-of-the-day card">
        <h2 style={{ color: "orange" }}>Verse of the Day - BG 6.40</h2>
        <hr />
        <p>
          The Blessed Lord said, "O Arjuna, neither in this world nor in the
          next will there be destruction for him; none, indeed, who does good, O
          my son, ever comes to grief."
        </p>
      </div>
    </div>
  );
};

export default BookPage;

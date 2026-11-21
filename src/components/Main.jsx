import { useState, useEffect } from "react";

function Main() {
  const [memeImageList, setMemeImageList] = useState([]);
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((obj) => setMemeImageList(obj.data.memes));
  }, []);

  function getMeme() {
    const randIndex = Math.floor(Math.random() * memeImageList.length);
    const randUrl = memeImageList[randIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randUrl,
    }));
  }

  function handleChange(event) {
    const { value } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: value,
    }));
  }

  return (
    <main className="main">
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into mordor" name="bottomText" />
        </label>

        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="Meme image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;

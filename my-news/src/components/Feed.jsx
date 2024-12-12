import React from "react";
import Post from "./Post";

const Feed = () => {
  const profile = {
    username: "Марк",
    phone: "+77479999999",
    hobbies: ["Тренажерный зал","Чтение","игры","Программирование"],
  };

  const posts = [
    {
      content: "Pythonnnnn!",
      time: "1 час назад",
    },
    {
      content: "Вчера провел тренировку в  новом зале,все супер!",
      time: "2 часа назад",
    },
    {
      content: "Читаю классную книгу: Психология влияния - Чалдини Роберт Б.",
      time: "6 часов назад",
    },
  ];


  return (
    <div>
      {/*Профиль*/}
      <div style={styles.profile}>
        <h2 style={styles.profileTitle}>Профиль</h2>
        <img
          src="src/img/th.jpg"
          alt="Avatar"
          style={styles.avatar}
        />
        <p>
          <strong>Имя:</strong> {profile.username}
        </p>
        <p>
          <strong>Телефон:</strong> {profile.phone}
        </p>
        <p>
          <strong>Хобби:</strong> {profile.hobbies.join(", ")}
        </p>
      </div>

      {/*Лента новостей*/}
      <div style={styles.feed}>
        <h2 style={styles.feedTitle}>Мои посты</h2>
        {posts.map((post, index) => (
          <Post
            key={index}
            username={profile.username}
            content={post.content}
            time={post.time}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  profile: {
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  profileTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  feed: {
    padding: "20px",
    marginTop: "20px",
    border: "1px solid #ff6347",
    borderRadius: "8px",
    backgroundColor: "linear-gradient(90deg, #ff7f50, #ff1493)",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  feedTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default Feed;









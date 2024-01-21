const icons = {
  cute: [
    'https://i.pinimg.com/564x/bb/87/f8/bb87f89e92f0009c06722947c0a029a5.jpg',
    'https://i.pinimg.com/564x/14/c9/b3/14c9b3cb2a2a17d7f6afb28be28df114.jpg',
    'https://i.pinimg.com/736x/d2/0b/c4/d20bc473211ff4d543917c1757e8eb71.jpg',
  ],
};

module.exports = {
  getUrl: (iconName) => {
    const iconUrls = icons[iconName];
    if (!iconUrls || iconUrls.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * iconUrls.length);
    return iconUrls[randomIndex];
  },
};

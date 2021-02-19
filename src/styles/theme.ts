const theme = {
  colors: {
    error: '#FF377F',
    purple: '#9D25B0',
    darkPurple: '#383E71',
    lightPurple: '#989FDB',
    offWhitePurple: '#FAF5FF',
    getGradient(): string {
      return `linear-gradient(267.79deg, ${this.darkPurple} 0%, ${this.purple} 99.18%)`;
    },
  },
  borderRadius: '8px',
};

export default theme;

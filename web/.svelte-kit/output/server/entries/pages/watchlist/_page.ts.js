const load = async () => {
  const response = await fetch("http://192.168.68.111:3001/api/v1/g/watchlist");
  const data = await response.json();
  return {
    post: {
      data
    }
  };
};
export {
  load
};

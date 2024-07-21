const convertMonth = (month) => {
  const num = +month;
  const months = [
    "Січеня",
    "Лютого",
    "Березня",
    "Квітня",
    "Травня",
    "Червня",
    "Липня",
    "Серпня",
    "Вересня",
    "Жовтня",
    "Листопада",
    "Грудня"
  ];
  return months[num - 1];
};
const convertCountry = (code) => {
  const name = new Intl.DisplayNames(["en"], { type: "region" });
  return "" + name.of(code);
};
const load = async ({ params }) => {
  const responseVideos = await fetch(
    "http://192.168.68.111:3001/api/v1/movie/i/" + params.movieId + "/videos"
  );
  const dataVideos = await responseVideos.json();
  const resultsVideos = dataVideos.data.results;
  const responseImages = await fetch(
    "http://192.168.68.111:3001/api/v1/movie/i/" + params.movieId + "/images"
  );
  const dataImages = await responseImages.json();
  const resultsImages = dataImages.data;
  const responseSimilar = await fetch(
    "http://192.168.68.111:3001/api/v1/movie/i/" + params.movieId + "/similar"
  );
  const dataSimilar = await responseSimilar.json();
  const resultsSimilar = dataSimilar.data.results;
  return {
    post: {
      images: resultsImages,
      videos: resultsVideos,
      similar: resultsSimilar,
      convMonth: convertMonth,
      convertCountry
    }
  };
};
export {
  load
};

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilms = function () {
return this.films.map((film) => {
  return film.title;
  });
};

Cinema.prototype.findFilm = function (title) {
  const result = this.films.filter(film => film.title === title);
  return result[0];
};

Cinema.prototype.findFilmByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre);
  return result;
};

Cinema.prototype.findFilmByYear = function (year) {
  const result = this.films.filter(film => film.year === year);
  if (result.length > 0) {
    return true }
  else
    { return false
  };
};

Cinema.prototype.findFilmByLength = function (length) {
  const result = this.films.filter(film => film.length < length);
  if (result.length > 0){
    return false}
  else {
    return true}
  };

Cinema.prototype.totalRunningTime = function (){
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

Cinema.prototype.findFilmByProperty = function (property, value) {
  const result = this.films.filter(film => film[property] === value);
  return result;
};

module.exports = Cinema;

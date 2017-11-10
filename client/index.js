window.onload = () => {
  const clockEl = document.querySelector('.clock');

  renderTime(clockEl);

  setInterval(() => renderTime(clockEl), 1000);
};

function renderTime(clockEl) {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockEl.innerHTML = prependZero(hours) + ' : ' + prependZero(minutes) + ' : ' + prependZero(seconds);
}

function prependZero(num) {
  return num < 10 ? '0' + num.toString() : num;
}

module.exports.renderTime = renderTime;
module.exports.prependZero = prependZero;
const startDate = new Date('2023-03-22');

function updateCountdown() {
    const now = new Date();
    const timeDiff = now.getTime() - startDate.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // 添加 0 补齐函数
    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    // 更新时间
    document.querySelector('#days').innerText = addZero(days);
    document.querySelector('#hours').innerText = addZero(hours);
    document.querySelector('#minutes').innerText = addZero(minutes);
    document.querySelector('#seconds').innerText = addZero(seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();
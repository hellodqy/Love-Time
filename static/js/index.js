const startDate = new Date('2023-03-22');

function updateCountdown() {
    const now = new Date();
    const timeDiff = now.getTime() - startDate.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // 计算当前这个数字的量级
    function determineMagnitude(number) {
        if (number >= 1 && number < 10) {
            return 1;
        } else if (number >= 10 && number < 100) {
            return 10;
        } else if (number >= 100 && number < 1000) {
            return 100;
        } else if (number >= 1000 && number < 10000) {
            return 1000;
        } else if (number >= 10000 && number < 100000) {
            return 10000;
        } else if (number >= 100000 && number < 1000000) {
            return 100000;
        } else {
            console.log("Aleady in heaven");
        }
    }

    // 添加 0 补齐函数
    // 天数一定是位数最多的，如果当前数字小于天数所对应的量级，就需要补足量级之差那么多个'0'
    function addZero(num) {
        if (window.innerWidth <= 1024)
            return num < determineMagnitude(days) ? `${"0".repeat(Math.log10(determineMagnitude(days)) - Math.log10(determineMagnitude(num)))}${num}` : num;
        else
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
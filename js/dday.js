var now = new Date();
var first = new Date("2018-04-17");  //인스턴스 만들기

var nowTime = now.getTime();  // 현재 시간을 밀리초로 표시
var firstTime = first.getTime();  // 지정한 시간을 밀리초로 표시
var calRule = 1000 * 60 * 60 * 24;  // 1일을 밀리초로 바꾸는 식

var passedTime = nowTime - firstTime;  // 지정한 시간 후 현재까지의 밀리초를 계산하기
var passedDay = Math.round(passedTime / calRule);  // 계산된 밀리초를 일로 환산하고 숫자에서 가까운 정수로 반환하기

document.querySelector('#accent').innerText = passedDay + '일';  //html에 출력하기

// 준서 태어난 날짜 계산

function calcDate(days) {  // 기념일을 계산하는 공통함수
    var hundredTime = firstTime + (days * calRule);  // 각 기념일을 밀리초로 환산하기
    var hundredDay = new Date(hundredTime);  // 밀리초를 날짜 정보로 변환
    
    var year = hundredDay.getFullYear(); // 날짜 정보에서 연도를 추출
    var month = hundredDay.getMonth() + 1;  // 날짜 정보에서 월을 추출
    var date = hundredDay.getDate();  // 날짜 정보에서 일을 추출

    document.querySelector('#date' + days).innerText = year + '년 ' + month + '월 ' + date + '일'; // 계산된 기념일을 화면에 출력하기
    }

function init() {  // 각 지정한 기념일 호출하기
    var daysList = [100, 200, 500, 1000];  // 기념일을 저장하는 배열
    for (i=0; i < daysList.length; i++) {  // 반복문으로 지정된 기념일 연산 반복하기
        calcDate(daysList[i]);  // 인덱스 값에 따라서 반복하기
    }
}    

init();  // 전체 실행하기



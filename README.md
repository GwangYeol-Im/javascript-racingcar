<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="400" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/7c76e809d82a4a3aa0fd78a86be25427">
</p>

### 🎯 step1

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.

### 🎯🎯 step2

- [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
  - [ ] 애니메이션 구현을 위해 setInterval, setTimeout, requestAnimationFrame 을 활용한다.
- [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고, 2초 후에 축하의 alert 메세지를 띄운다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## 📝 구현 기능 목록

- 자동차 이름 입력
  - [x] 올바른 자동차 이름을 입력한 후 확인버튼을 누르면 시도횟수 입력창을 화면에 출력한다.
    > - X ] 'EAST, WEST, SOUTH, NORTH'를 입력하면 화면에 시도횟수 입력창이 표시되는지 테스트를 한다.
  - [x] 올바르지 않은 자동차 이름을 입력한 경우 경고메세지를 출력한다.
    > - [x] 'YUJOYOONHO'을 입력한 경우 '이름은 5글자 이하로 입력해 주세요.' 경고메세지를 출력하는 테스트를 한다.
    > - [x] 공백만 입력된 경우나 아무것도 입력되지 않은 경우 '공백만으로는 이름을 구성할 수 없습니다.' 경고메세지를 출력하는 테스트를 한다.
    > - [x] 이 때, 자동차 이름 입력창을 초기화 하는지 테스트를 한다.
- 시도 횟수 입력
  - [x] 양의 정수만을 시도횟수로 입력할 수 있다.
    > - [x] '-7'을 입력한 경우 '1 이상의 숫자를 입력해주세요.' 경고메세지를 출력하는 테스트를 한다.
    > - [x] 공백만 입력된 경우나 아무것도 입력되지 않은 경우 '1 이상의 숫자를 입력해주세요.' 경고메세지를 출력하는 테스트를 한다.
    > - [x] 이 때, 시도횟수 입력창을 초기화 하는지 테스트를 한다.
  - [x] 확인버튼을 누르면 앞서 입력된 자동차를 화면에 표시해준다.
    > - [x] 입력된 자동차 대수와 화면에 보이는 자동차 대수가 일치하는지 테스트를 한다.
    > - [x] 입력된 자동차 이름과 화면에 보이는 자동차 이름이 일치하는지 테스트를 한다.
- 자동자 경주 진행
  - [x] 자동차 경주가 정상적으로 진행되는지 테스트 한다.
    > - [x] 난수를 생성하는 함수가 0 ~ 9 사이의 정수를 반환하는지 확인하는 테스트를 한다.
    > - [x] 전진횟수를 결정하는 함수가 '[1, 3, 3, 7]'을 입력받았을 때 '1'을 반환하는지 확인하는 테스트를 한다.
    > - [ X 각 자동차의 이름과 화살표 갯수가 제대로 표시되는지 확인하는 테스트를 한다.
- 결과 출력
  - [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 화면에 출력한다. 우승자가 여러명일 경우 ,를 이용하여 구분해서 출력한다.
    > - [x] 최종 우승자가 `🏆 최종 우승자: ${쉼표로 구분된 우승자 목록} 🏆`와 일치하는지 확인하는 테스트를 한다.
  - [x] 다시 시작버튼을 누르면 초기 화면을 출력해서 게임을 다시시작할 수 있도록 한다.
    > - [x] '#racing-count-section', '#game-process-section', '#game-result-section'이 hidden 속성을 가지고 있는지 테스트를 한다.
    > - [x] '#racing-count-section' 노드가 비어있는지 테스트를 한다.
    > - [x] '#car-name-input', '#racing-count-input'의 입력창이 비어있는지 테스트를 한다.

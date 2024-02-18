# 팬레터 프로젝트

> 스파르타 리덕스 숙련주차 개인과제

## 주제

그룹 아티스트 팬레터함

## 개발기간

개발 기간 : 2024.02.02 ~ 2024.02.05<br>
보완 기간 : 2024.02.06 ~ 진행중

## 필수 구현 사항

- CRUD
- 아티스트별 게시물 조회
- 원하는 아티스트에게만 팬레터 등록
- 팬레터 상세화면 구현
- 상세화면에서 CRUD
- 팬레터 등록시 id-uuid 사용
- 전역 스타일에 reset.css 적용 후 box-sizing : border-box 설정
<details><summary>Styled-components를 이용하여 스타일링
</summary>

_인라인 스타일링, css 파일을 이용한 스타일링방식 지양_
_스타일링이 들어간 경우는 styled-components화_
_아티스트 선택탭에 props를 넘겨 조건부 스타일링 적용_

</details>

## 페이지 구성

- Main
- Detail (팬레터 상세페이지)

## 진행하면서 발생한 오류

- localStorage를 사용해 fakeDate를 초기 데이터를 저장했다. 그 후 작성되는 letters도 setItem을 사용해 저장했지만, 팬레터 상세페이지와 홈화면을 이동하면 초기에 저장된 localStorage만 남아있었다.
<details><summary>해결방법</summary>

* const [letters, setLetters] = useState(
JSON.parse(localStorage.getItem("letters")) ?? [...fakeData]
);\*
</details>

## 프로젝트 보완 사항

- box-sizing : border-box 설정
- redux를 사용한 리팩토링 (현재 진행중)
- Youtube api 사용
- 의미없는 swtich문 변경수정

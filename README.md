# 팬레터 프로젝트

> 스파르타 리덕스 심화주차 개인과제 <br/>

## 주제

인증 서비스가 들어간 그룹 아티스트 팬레터함

<img src="/assets/readme/home.png"  width="500" height="370">

## 개발기간

개발 기간 : 2024.02.19 ~ 2.21<br/>
보완 기간 : 2024.02.21~ 진행 중

## 필수 구현 사항

- 팬레터 CRUD 를 위한 API 통신은 json-server 를 이용해 주세요 (firebase firestore 사용X)
- 인증과 프로필관리를 위한 API 통신은 제공된 jwt 인증서버를 이용해 주세요 (firebase authentication 사용 X)
- fetch API 대신 axios 를 이용해 주세요
- 전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정 (스타일링 방식은 자유지만 일관성 있게 작업할 것)
- Redux 사용 시 반드시 Redux Toolkit 을 이용해 주세요

## 페이지 구성

- login & join
- Main
- my Page (내 프로필)
- Detail (팬레터 상세페이지)

## 진행하면서 발생한 오류

- 새로고침 시 데이터 날라감
- 실시간 렌더링 오류
- JWT 인증 서버 , 회원 정보 확인 오류 발생

## 프로젝트 보완 사항

- 모든 api요청 전에 accessToken 유효여부 확인
- 프로필 api 설정
- box-sizing : border-box 설정 및 css 수정
- 의미없는 swtich문 변경수정
- 선택 요구 사항
- redux 쿼리를 사용한 리팩토링 (현재 진행중)

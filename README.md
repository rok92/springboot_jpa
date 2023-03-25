# SpringBoot_JPA활용 회원가입

### 1. 개발환경
- Open JDK 11
- IntelliJ IDEA Community
- MySQL Server8.0.29
- SpringBoot version 2.7.9

### 2. 라이브러리, 프레임워크

- Spring Data JPA : Hibernate
- Thymleaf
- lombok
- gradle

### 3. Explanation

- JPA repository를 활용하여 CRUD(회원가입, 삭제, 정보수정, 로그인, 로그아웃 기본기능 구현)
- Entity클래스를 활용하여 sql문 작성 없이 객체로 구현
- lombok을 활용한 getter, setter 사용
- RESTApi 구조를 이용하여 구현
- application.yml
- Getmapping, Postmapping 으로 구현 주소값 전달받고, ModelAttribute와 Pathvariable로 인자 전달 후 Thymleaf 문법을 활용하여 화면에 구현


# 🎣히트맵
<img src="https://user-images.githubusercontent.com/100126319/217750977-35c3f015-7bc4-4d53-a604-6d67101d7758.png" width="300" height="165"/>

## [👉 히트맵 바로가기](https://hitmap-fe.vercel.app)
## [👉 히트맵 노션 바로가기](https://fluttering-ulna-44a.notion.site/Final-Project-Hit-map-b73f0f5e0db847d0bc9e328cb507f53c)

## 🕶️ 프로젝트 내 '정창원' 상세 역할 코드링크
- SNS 게시글 CRUD, 게시글 상세조회 Read
  - [게시글 생성](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/create/SnsCreate.jsx)
  - [게시글 조회](https://github.com/jungjang/HITMAP_FE/tree/master/src/components/sns/main)
  - [게시글 상세 조회](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/detail/SnsDetailCard.jsx)
  - [게시글 수정](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/update/SnsUpdateModal.jsx)
  - [게시글 삭제](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/detail/DeleteConfirmModal.jsx)
  
- SNS 댓글 CRUD
  - [댓글 생성](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/layout/bottomBar/WriteCommentBar.jsx)
  - [댓글 조회](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/comment/SnsComment.jsx)
  - [댓글 수정](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/comment/CommentUpdateModal.jsx)
  - [댓글 삭제](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/sns/comment/CommentDeleteConfirmModal.jsx)
  
- 내 정보 수정
  - [내 닉네임,프로필사진 수정](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/components/myPage/EditMyInfo/editUser/EditUser.jsx)
  
- 소셜 로그인
  - [카카오로그인 버튼](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/pages/user/kakaoLogin/Start.jsx)
  - [카카오로그인 redirection페이지](https://github.com/jungjang/HITMAP_FE/blob/b64d02d03fb414c211caf857c731521896611c75/src/pages/user/kakaoLogin/SocialAuth.jsx) 

## 🚑 나의 서비스 개선 경험

### (1) 초기 로딩속도 개선,최적화 / 라이트하우스 점수 측정
  [최적화 전]
  
  <p>
  <img src="https://user-images.githubusercontent.com/109060295/218295248-70ea426d-11a8-447d-a554-88176451665c.png" />
  </p>
  
  [최적화에 적용한 방법]
  1. React.memo 를 적용하여 props과정에서의 불필요한 재렌더링 방지 
  2. React.lazy 함수를 이용하여 동적 import를 통해 코드분할
  3. 서버에서 이미지 리사이징하는 과정에서 발생하는 문제를 프론트엔드에서 임시조치하여 해결
  
  [최적화 후]
  <p>
  <img src="https://user-images.githubusercontent.com/109060295/218295386-263972d3-9d17-433f-bed1-b26378e590de.png" />
  </p>

### (2) 유저 피드백 기반 사용성 개선
  <br>
  [문제상황]
  
  - 로그인한 유저가 로그아웃,회원탈퇴와 같이 토큰을 핸들링하는 작업을 진행한 후(토큰을 삭제 한 후)<br>
    뒤로가기 버튼을 누를 경우 여전히 유저 데이터가 남아있는 문제
  [해결방법]
  - PrivateRoutes 설정을 통해 <br>
    토큰이 없을 시 '뒤로가기를 통한 기존데이터 페이지에 접근' 행동을 못하게 처리
<p>
  <img src="https://user-images.githubusercontent.com/109060295/218295041-9d595b4c-0e94-4a07-bcb8-88bf4b249883.png" />
  <img src="https://user-images.githubusercontent.com/109060295/218295077-b7221881-1107-4807-889a-0c30d5fa0eee.png" />
  </p>


### ❗ 느낀점 & 아쉬운점
- 협업 과정에서 제한된 기간 내에 프로젝트를 완성하기 위해 팀원들의 개발 역량의 객관화와  <br>
 이를 통한 계획적인 스케쥴링의 중요성을 깨달았습니다.
- 라이트하우스를 통한 초기로딩속도 개선을 했지만 <br> 추가적으로 서비스 내부에서 이동할 때의 속도 개선을 위해 WebVital을 이용해 개선시켜보고 싶습니다.


### ⚙️ 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">








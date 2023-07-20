# 3D 자산거래 이커머스

## 💁🏻 프로젝트 소개
![Neuroid Asset](https://github.com/3DAsset-eCommerce/3D-FE/assets/76941552/608c6f51-4bdc-41d5-aaf2-b671b62b91b8)
> 3D-Asset 자산거래 이커머스 <br />

#### ⏰ 개발 기간

- 2023.06.08 ~ 2023. 06. 28

<br/>

#### 🔗 배포 사이트

- [🦾 3D 자산거래 이커머스 🦾](https://www.moneybridge.co.kr/)

## 👥 팀원 소개
| 이로운(팀장)                                                                                        | 이찬영(팀원)                                                                                 | 송지윤(팀원)                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | 
| ![title](https://avatars.githubusercontent.com/u/76941552?v=4)                                     | ![title](https://avatars.githubusercontent.com/u/92348492?v=4)                               | ![title](https://avatars.githubusercontent.com/u/71622691?v=4)                              |
| [@ronieo](https://github.com/ronieo)                                                          | [@dokimion24](https://github.com/dokimion24)                                                   | [@jiyoon29](https://github.com/jiyoon29)                                                    |                                                   |
|📍로그인<br />📍이메일 찾기<br />📍비밀번호 찾기<br />📍회원가입<br />📍마이페이지 </br> 📍내에셋 </br> | 📍메인페이지<br />📍검색<br /> 📍카테고리<br />📍리뷰작성 <br/> 📍별점<br /> 📍페이지네이션<br /> |📍글로벌레이아웃<br />📍장바구니<br /> 📍결제<br /> 📍결제완료<br /> 📍위시리스트<br />                               | 
| [이로운 작업 내역](https://github.com/3DAsset-eCommerce/3D-FE/issues?q=author%3Aronieo+) | [이찬영 작업 내역](https://github.com/3DAsset-eCommerce/3D-FE/issues?q=author%3Adokimion24+) | [송지윤 작업 내역](https://github.com/3DAsset-eCommerce/3D-FE/issues?q=author%3Ajiyoon29) |


## 💻 개발 환경
### 🔧 스킬셋
<!--![FE_skillset](https://github.com/3DAsset-eCommerce/3D-FE/assets/76941552/a0e3c0fd-0eee-45fe-9fd4-afaeb7c05a1d)-->
<img src='https://github.com/3DAsset-eCommerce/3D-FE/assets/76941552/0b0622af-6adb-4414-a198-299fb81f70c7' width='550px' height='700px'/>

<br /><br />

### 📁 프로젝트 폴더 구조
```
Neuroid-asset-FE
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ background
│  └─ icons
│  └─ img
│  └─ globalImages
├─ README.md
├─ src
│  ├─ api
│  │  └─ interface
│  │  └─ service
│  ├─ app
│  │  ├─ cart
│  │  ├─ categories
│  │  ├─ login
│  │  ├─ my-assets
│  │  ├─ my-page
│  │  ├─ payment
│  │  ├─ signup
│  │  ├─ wishlist
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ page.tsx
│  ├─ components
│  │  └─ assetDetail
│  │  └─ assets
│  │  └─ cart
│  │  └─ category
│  │  └─ common
│  │  └─ login
│  │  └─ logout
│  │  └─ myAsset
│  │  └─ myPage
│  │  └─ payment
│  │  └─ signup
│  │  └─ wishlist
│  ├─ data
│  ├─ hooks
│  ├─ store
│  ├─ styles
│  │  └─ globals.css
│  └─ utils
├─ tailwind.config.js
├─ tsconfig.json
└─ yarn.lock
```
<br />


<!--
## 🖥 프로젝트 미리보기
|**로그인**|**회원가입**|
| --- | --- |
|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/991078b2-d48e-40bd-8518-1185b61c8174" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/f195ec94-793f-447b-be6f-5077671168a7" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">이메일 인증을 거치고 모든 입력폼에서 유효성검사를 진행 </br> 회원가입 완료 시, 자동으로 로그인이 완료됩니다.</p>|<p align="center">이메일 인증 후 모든 입력폼에서 유효성검사를 진행하며 </br> PB는 명함을 첨부하고, 회원가입 심사를 대기합니다. </br> 심사 통과 후 서비스 이용이 가능합니다.</p>|


|**로그인**|**PB 프로필 수정**|
| --- | --- |
|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/eb4f6b56-b0af-46c0-a2a7-ef0273fcc2cb" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/a6ce3bfc-84d5-4aa3-a79c-80c75597746f" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">회원타입을 선택하고 로그인을 진행합니다. </p>|<p align="center">PB는 가입 후 프로필을 작성합니다. <br/> 투자자에게 보여줄 자신의 경력 및 다양한 정보들을 <br/> 제공할 수 있습니다. </p>|


|**메인페이지**|**위치정보 서비스**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/money-bridge/assets/100064540/26b1b982-de49-4adc-85e6-d810f8f5e9a0" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/money-bridge/assets/100064540/d160562f-4ff8-4f04-b7dc-57eb0cda55d0" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">등록된 위치에 따라 PB를 추천받을 수 있으며</br> PB의 콘텐츠를 확인할 수 있습니다. </br> 그 외에도 분야, 증권사별 카테고리를 통해</br> PB리스트 페이지로 이동할 수 있습니다.</p>|<p align="center">Geolocation API를 사용해</br> 현재위치를 입력받거나,</br> kakao API를 통해 위치를 검색하여</br> 행정구역이름으로 위치를 설정할 수 있습니다.</p>|


|**라운지**|**검색하기**|
| --- | --- |
|<p align="center"><img src="https://github.com/FINALALT1/money-bridge/assets/100064540/5b53f71c-5c2f-49cb-8bf2-fe695e422f03" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/FINALALT1/money-bridge/assets/100064540/765c3fef-af1d-442e-b256-d2600b3cdc45" width="380" height="500" style="object-fit: cover; object-position: center;"></p>
|<p align="center">PB가 등록한 콘텐츠를 라운지에서 </br> 간략하게 확인할 수 있습니다.</p>|<p align="center">PB검색 및 콘텐츠를 검색을 통해 찾아볼 수 있습니다.</p>|


|**PB 상세프로필**|**콘텐츠 보기**|
| --- | --- |
|<p align="center"><img src="https://github.com/FINALALT1/money-bridge/assets/100064540/cb5566c8-76d3-465b-a071-fbf8c606ff99" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/FINALALT1/money-bridge/assets/100064540/332676df-20eb-4701-96c3-2e6c82762060" width="380" height="500" style="object-fit: cover; object-position: center;"></p>
|<p align="center">PB정보를 확인하고 공유, 북마크 할 수 있습니다.</p>|<p align="center">콘텐츠 정보를 확인하고 공유, 북마크 할 수 있습니다. </br> 댓글을 통해 소통할 수 있는 공간을 제공합니다. </p>|

|**투자성향 분석(투자자)**|**상담 예약(투자자)**|
| --- | --- |
|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/72a27f3b-1c0e-4096-9104-258c31f5b236" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/9b10b1de-20d4-4391-8722-7223cf60a1ea" width="380" height="500" style="object-fit: cover; object-position: center;"></p>
|<p align="center">챗봇 형식으로 투자성향 분석 진행 및 </br> 답변에 맞는 투자 성향을 분석합니다.</p>|<p align="center">원하는 PB와의 상담 예약을 <br/> 챗봇 형식으로 진행할 수 있습니다.</p>|


|**PB 리스트 조회**|**투자자 나의상담**|
| --- | --- |
|<p align="center"><img src="https://github.com/lbw3973/money-bridge/assets/75530371/ce8b2256-8f7d-475a-a75a-78e47f3fc17d" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/money-bridge/assets/100064540/3b320780-6477-4491-ac28-4cb470552e5e" width="380" height="500" style="object-fit: cover; object-position: center;"></p>
|<p align="center">필터링 조건에 따른 PB리스트를 조회할 수 있습니다. </br> 투자자는 투자성향 분석을 완료한경우, </br> 투자성향에 맞는 PB리스트를 볼 수 있습니다.</p>|<p align="center">PB에게 신청한 상담목록을 확인할 수 있고,</br>예약취소, 변경, 후기 등을 사용할 수 있습니다.</p>|


|**PB 일정관리**|**PB 고객관리페이지**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/money-bridge/assets/100064540/b5e3c5b9-6ec6-4cb8-8d8d-fdfeab2ca7d4" width="380" height="500" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/money-bridge/assets/100064540/9310d161-a3f9-486f-aa8b-1b2986cc9a4f" width="380" height="500" style="object-fit: cover; object-position: center;"></p>
|<p align="center">캘린더에서 각 항목이 있는 날짜를 확인하고 </br> 해당 날짜에 등록된 상담리스트를 확인할 수 있습니다.</br> PB의 업무시간 및 상담 불가한 시간을 </br> 메모하여 투자자에게 알릴 수 있습니다.</p>|<p align="center">상담현황을 확인할 수 있고,</br> 나의 후기, 일정관리 페이지로 이동할 수 있습니다.</br> 카테고리별 예약내역을 확인할 수 있습니다.</p>| -->

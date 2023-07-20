# 3D 자산거래 이커머스

## 💁🏻 프로젝트 소개
![Neuroid Asset](https://github.com/3DAsset-eCommerce/3D-FE/assets/76941552/608c6f51-4bdc-41d5-aaf2-b671b62b91b8)
> 3D-Asset 자산거래 이커머스 <br />

#### ⏰ 개발 기간

- 2023.06.08 ~ 2023. 06. 28

<br/>

#### 🔗 배포 사이트

- [🦾 3D 자산거래 이커머스 🦾](https://neuroid-asset.vercel.app/)

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
│  │  └─ cart
│  │  └─ categories
│  │  └─ login
│  │  └─ my-assets
│  │  └─ my-page
│  │  └─ payment
│  │  └─ signup
│  │  └─ wishlist
│  │  └─ layout.tsx
│  │  └─ loading.tsx
│  │  └─ page.tsx
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
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center"> 로그인 후 서비스 이용이 가능합니다. </p>|<p align="center">이메일 인증 후 모든 입력폼에서 유효성검사를 진행 후 </br> 로그인 페이지로 렌더링 됩니다.</p>|


|**메인페이지**|**카테고리**|
| --- | --- |
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">로그인 여부에 상관 없이 모든 에셋을 출력합니다.</p>|<p align="center">카테고리에 따라 분류된 에셋을 출력하고, </br> 더보기를 클릭 해 </br> 태그에 해당하는 에셋만 출력됩니다</p>|


|**에셋리뷰**|**에셋별점**|
| --- | --- |
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">에셋 클릭 시, 타 유저 리뷰를 볼 수 있고 </br> 구매한 에셋에 따라 리뷰 작성 가능합니다.</p>|<p align="center">구매한 에셋에 대한 별점 책정 및 수정이 가능합니다. </p>|


|**장바구니**|**위시리스트**|
| --- | --- |
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">구매하려는 에셋을 담거나 삭제 할 수 있고</br> 전체 구매 또는 선택 구매가 가능합니다.</p>|<p align="center">위시리스트에 에셋을 담거나 삭제 할 수 있고</br> 장바구니에 담을수도 있습니다.</p>|


|**결제하기**|**결제완료**|
| --- | --- |
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">결제를 희망하는 에셋을 담고 </br> 결제수단을 선택해 결제가 가능합니다. </br> 현재는 카카오페이만 가능합니다. </p>|<p align="center">결제완료한 에셋을 리스트로 출력하고 </br> 결제 내역에 대한 정보를 보여줍니다.</br> 완료페이지에서 메인페이지 또는 </br> 주문내역 페이지로 리랜더링 선택이 가능합니다.</p>|


|**내에셋**|**마이페이지**|
| --- | --- |
|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="" width="" height="" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">구매한 에셋을 다운받는 페이지 입니다. </br> 전체다운로드 또는 체크 버튼을 사용해 선택 다운로드가 가능하고 </br> 확장자는 .fbx 또는 .zip입니다.</p>|<p align="center">계정정보 또는 주문내역을 확인하는 페이지입니다.</br>계정정보에서 비밀번호 변경이 가능하고 </br> 주문상세내역을 확인할 수 있습니다.</p>|
-->

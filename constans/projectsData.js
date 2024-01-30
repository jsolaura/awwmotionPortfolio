export const featuredWork = [
	{
		title1: "Qpikcer",
		title2: "Admin WEB",
		src: "qpicker_admin.png",
		subTitle: `큐피커 리뉴얼 버전 관리자 웹 프로젝트 세팅 및 개발\n(회원관리, 상품관리, CS 관리, 콘텐츠관리, 게시판관리, 플레이스관리 등)`,
		description: `
[문제 해결]\n- AWS EC2, docker, nginx 를 활용한 개발서버 실서버의 분리된 개발환경 시스템 구축 proxy 설정 및 CORS 크로스 브라우징 이슈 해결\n- 조건부 선택시 적용되는 값에 따라 분리된 화면 처리에 따라 useCallback, useMemo hooks 를 사용하여 리렌더링 현상 방지\n- Redux-toolkit 을 활용한 전역 상태 관리로써 props drilling 방지\n- 데이터에 관련된 type 은 팀원들과 커뮤니케이션을 통해 정의하여 이후 발생할 수 있는 이슈 방지\n
[기능 개발]\n- Google Maps API 를 활용한 UI 고도화 장소 검색 기능\n- QR 코드 이미지 생성 및 다운로드 기능단일 전체 zip 파일 압축 기능 개발\n- 콘텐츠 드래그 앤 드롭 핸들링 및 캘린더와 날짜 선택 적용 기능\n
[방향성 개선]\n- 초기 단계 기획이 없던 상황에 로드맵 및 기능 우선순위를 정의하여 제안드리며, 열린 피드백을 요청하였습니다.\n- 팀 내에 스프린트를 제안하여 주기별로 해내어야하는 과제들에 대해 책임감을 스스로 부과하며 기간 내에 처리하였습니다.\n- 개발 과정에서 기획자, 디자이너가 미처 고려하지 못한 인터렉션을 먼저 고민하고 제안하여 적용했습니다.\n- CRUD 기능을 관리할 때 고려해야하는 요소들을 꼼꼼히 확인하며 개발했습니다.
`,
	},
	{
		title1: "R&D TFT",
		title2: "[다님] Mobile WEB",
		src: "danim.jpeg",
		subTitle: `유저의 취향 키워드 수집 지역 및 날짜를 선정하여\n이에 걸맞는 여행을 추천해주는 모바일 웹페이지 기획 및 개발`,
		description: `
[문제 해결]\n- API 호출 이후 '날짜별로 리스트를 나열해야 할 때', 혹은 '배열의 순서를 거꾸로 노출시키고 싶을 때' 와 같이 필요한 상황에 따라 프론트엔드에서 Array 형태의 데이터를 가공하여 적용\n
[기능 개발]\n- 모바일 특성에 맞는 Touch 이벤트를 활용한 double tap card flip animation 기능 구현\n- text marquee animation 기능 구현\n- Google Maps API 와 드래그 앤 드롭 핸들링을 활용한 marker 와 polyline UI 구현\n
[방향성 개선]\n- 만들어내어야 하는 프로덕트에 대한 이해도가 없을 때 팀이 구성되어, POI/여행/취향 등 키워드에 맞는 서비스를 함께 설계하고 아이디어를 제시했습니다.\n- 이에 따라 프론트엔드 개발 측면에서는 제한된 시간에 맞추는 부분을 중점으로 두어 최대한 가벼운 라이브러리를 선택하였고, 모바일 웹으로 배포하여 목적에 맞는 프로젝트를 완수하였습니다.\n
`,
	},
	{
		title1: "Qpicker",
		title2: "Ticket WEB",
		src: "qpicker_web.png",
		subTitle: `유저가 실사용중인 API를 활용하여 로그인/회원가입 기능,\n결제 모듈 연동 기능 및 다국어 지원 기능 등을 적용한 반응형 웹페이지 개발`,
		description: `
[문제 해결 및 방향성 개선]\n- 이미지 컴포넌트를 Preloading 하는 컴포넌트를 생성하고, 이미지가 로드되기 전 placeholder 이미지 파일을 노출시키며 lazy loading 을 활용함으로써 사용자경험을 개선했습니다.\n- 취약한 CSR 환경에서의 검색 엔진 최적화를 위한 Meta tag 정의 및 추가 보완 작업하여 적용했습니다.\n - 명확하지 않은 초반 기획단계에 다국어지원 기능을 염두하여 주요 사용될 카테고리성 언어들을 분리해서 관리하였고, 추가적으로 기능을 제안하여 적용했습니다.\n
[기능 개발]\n- OAuth 회원가입 JWT 형식의 Token 과 Cookie 를 활용하여 인증인가 로직 구현 및 소셜 로그인(카카오 페이스북 애플) 연동\n- GeolocationDB Open API 를 활용하여 유저의 ip 추적 기능과 i18n를 활용한 다국어 지원 기능\n- BootpayPG 결제 모듈 연동 및 과정에 맞는 검증 로직 구현\n
`,
		link: 'https://ticket.qpicker.com/'
	},
	// {
	// 	title1: "Qpicker",
	// 	title2: "Audio player ver1 WEB",
	// 	src: "nothing_design_studio.png",
	// 	subTitle: ``,
	// 	description: `
	//
	// 	`,
	// },
	{
		title1: "NMKPG",
		title2: "임시정부기념관 Admin WEB",
		src: "nmkpg.png",
		subTitle: `임시정부기념관 앱을 위한 관리자 웹 프로젝트 세팅 및 개발\n(전시 관리, 오디오 관리, 해설자 관리, 계정 관리)`,
		description: `
[문제 해결 및 방향성 개선]\n- 클라이언트의 니즈에 맞는 필요한 기능들을 취합하여 단독으로 기획, 디자인, 개발에 기여했습니다.\n- 필수 입력 항목, 앞의 입력값에 따라 조건부로 보여지는 항목 관리, 최대값/최소값 설정 등 서버 호출시 고려해야하는 요소을 고려하여 개발했습니다.\n- CRA 특성상 발생하는 새로고침 했을 때의 이슈를 redux-persist 를 사용하여 store state 를 유지시켜 대응했습니다.\n
[기능 개발]\n- datatable 내의 드래그앤드롭 기능을 통한 콘텐츠 순서 변경 기능\n- 오디오 파일 업로드 기능 및 오디오 플레이어 UI 구현\n- 이미지 타입 검증 및 업로드 기능\n
`,
	}
]
export const projectsData = [
	{
		title1: "Evently",
		title2: "Social Meeting WEB",
		src: "evently.png",
		subTitle: `원하는 이벤트를 등록/수정하여 올리고 티켓 구매 또는 판매할 수 있는\nEventbrite 또는 Meetup 과 같은 이벤트를 탐색할 수 있는 조직적인 웹`,
		description: `
[문제 해결 및 방향성 개선]\n- webhook 설정과 데이터베이스에 접근하는 로직을 구현했음에도 실제 mongodb 에 사용자가 적용이 되지 않아 어려움이 있었지만, 필요한 항목에 누락된 곳은 없는지 확인하여 비로소 데이터베이스에 연동되는 과정을 경험하였고, 프론트엔드 영역 뿐만 아닌 백엔드의 작업 환경을 경험하면서 사용자가 웹에 접근해 접하게되는 모든 과정에 대한 각 분야를 업무를 이해하며 각각 고려해야할 요소들에 대해 명확히 인지하였습니다.\n- '실제 사용자가 티켓을 구매했다면' 또는 '이벤트 글을 생성한 사용자의 티켓이 팔리고 있다면' 을 가정하여 상황에 맞는 후처리를 통해 프로세스를 꼼꼼히 확인, 적용 하였습니다.\n- 동적인 필터 기능을 통해 효율적인 사용자 경험을 제시할 수 있지만 이에 따른 잦은 서버 호출로써 웹 성능이 저하될 수 있다는 점을 고려해, setTimeout/clearTimeout 메서드를 활용하여 정해놓은 timeout 이 후에 트리거가 될 수 있도록 debounce 함수를 적용하였습니다.\n
[기능 개발]\n- 사용자를 관리하고 쉽게 인증할 수 있는 Clerk 을 활용해 최근 가입 또는 로그인한 사용자를 트레킹하고 세션 토큰을 활용한 인증 로직 구현\n- 파일 호스팅을 관리하는 S3와 유사한 Uploadthing 의 오픈소스 API 를 활용하여 파일 업로드 기능 적용\n- 직접 결제할 수 있는 BootpayPG 테스트모드 결제 모듈 구현\n- 이벤트 등록/수정/삭제 및 티켓 구매 등 CRUD 기능 구현\n- react-query 를 활용한 키워드와 카테고리 검색을 통한 동적인 검색 및 필터 기능 적용\n
`,
		link: 'https://evently-nu-teal.vercel.app/'
	},
	{
		title1: "Recipe-App",
		title2: "WEB",
		src: "receip.png",
		subTitle: `원하는 레시피를 키워드로 검색하여 탐색할 수 있는 모바일 웹`,
		description: `- Fetch by api of the mealdb\n- Bring the json.data\n- Setted the localStorage\n- Used the DOM\n- Change blocks when the keypress down event\n`,
		link: 'https://jsolaura.github.io/Recipe-App/index.html'
	},
	{
		title1: "Quiz-App",
		title2: "WEB",
		src: "quiz.png",
		subTitle: `가장한 5개의 문제를 제시하고, 맞힌 정답의 갯수를 추출하는 모바일 웹`,
		description: `- Quiz data array\n- Datas put in the elements\n- Answer elements are carried out\n- from forEach roof\n`,
		link: 'https://jsolaura.github.io/Quiz-App/index.html'
	},
	{
		title1: "Drawing-App",
		title2: "WEB",
		src: "drawing.png",
		subTitle: `캔버스를 활용하여 그리기/삭제 기능을 적용한 모바일 웹`,
		description: `- Used mouse event handler\n- Got the x / y offset\n- Made the line and circle function\n- Size and color changer button by the left side\n- Reset canvas by the garbage of right side\n`,
		link: 'https://jsolaura.github.io/Drawing-App/index.html'
	},
	{
		title1: "Tetris",
		title2: "MiniGame",
		src: "tetris.png",
		subTitle: `테트리스 게임 모바일 웹`,
		description: `- Keydown event handling\n- Import by [block].js file\n- Used the DOM Object\n- Keydown event handling\n- Change blocks when the keypress down\n`,
		link: 'https://jsolaura.github.io/Tetris-game/index.html'
	},
	{
		title1: "Jumping",
		title2: "MiniGame",
		src: "jumping.png",
		subTitle: `점프하여 통과하는 미니 게임`,
		description: `- Jumping-MiniGame\n- Animate Css\n- Made character and block\n- Used animation in Css\n- Jumping by setTimeout and\n- Going block by setInterval method\n`,
		link: 'https://jsolaura.github.io/Jumping-MiniGame/index.html'
	},
]
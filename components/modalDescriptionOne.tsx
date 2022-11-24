import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ModalDescriptionOne() {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const netflix = () => {
    return (
      <p>
        {" "}
        오늘도 다음 작품을 고르시고 계신가요? Netflix App에서 수 많은 영화 , TV
        Series에 관한 추천을 받으시고 선택하신 작품을 즐겨보세요. 또한 추천
        받으신 작품에 대한 정보뿐만 아니라 호기심이 있으신 작품에 대하여도
        알아가 봐요.
        <br />
        <br />
        이 application은 Nomad Coder의 Clone Coding TypeScript, React강의를
        활용하여 제작한 Front-End application을 참고하여 NextJs으로 스스로
        개발한 Project입니다.
        <br />
        <br />
        이 application은 movie API 서버에서 정보를 받아 오기 위한 query 들을
        생성하고 코드를 작성하는 방식에 대하여 배웠고 또한 이 서버 state에서
        데이터를 fetching , caching, synchronizing, updating 를 관히하기 위한
        React Query에 관하여 공부 할 수 있는 기회가 되었습니다.
        <br />
        <br />
        기억에 남는 점은 데이터를 받아오는 코드들을 작성 후에 깔끔하게 정리하기
        위한 ReFactoring 과정에서 코드를 작성하는 것 보다 더 오랜 시간을
        소모했었던 기억이 납니다. 그러나 고생을 한번 해보니 지금은 수월하게
        코드를 정리하고 있습니다.
      </p>
    );
  };
  const YouTube = () => {
    return (
      <p>
        YouTube clone app Youtube App에서 콘텐츠를 제작하여 다양한 유저와
        동영상을 공유하고 전 세계의 인기 영상을 즐겨보세요. Web Camera 기술을
        이용하여 구현한 Streaming Event를 활용하는 것 또한 잊지 마세요! <br />
        <br /> 이 application은 Nomad Coder에 강의를 수강하며 제작한 Clone
        Coding Project 입니다. Front-End 파트를 JavaScript , Html , CSS , Pug 를
        활용하여 제작하였고 Back-End 파트는 NodeJs(express) , MongoDB를 활용
        하여 개발하고 배포한 Full Stack application입니다. <br />
        <br /> 이 application을 제작하면서 기본적인 CRUD 빌드에 관한 수업을
        집중적으로 듣게 되었고, 막연하게 두렵기만 하던 API에 대하여 자세하게
        접할 수 있는 기회가 되었었습니다. <br />
        <br />
        그러나 Back-end를 빌드하고 개발하는데에 있어서 역량부족을 들어냈었기
        때문에 시간을 충분히 들여서 복습하고 추가적으로 NodeJs 에 대해 공부할
        필요성에 대해서 느낄 수 있었습니다.
      </p>
    );
  };
  const KoreanLanguage = () => {
    return (
      <p>
        KoreanLanguage 앱 화면에 떠오르는 동물의 이미지 에니메이션을 보고 알맞은
        카드를 선택하세요! 귀여운 동물의 이미지와 눈을 즐겁게 만들어주는
        에니메이션을 보고 계신다면 시간이 어떻게 갔는지 모를 수 있습니다 !!{" "}
        <br />
        <br /> 이 application은 TypeScript , NextJs(React) 를 활용하여 제작한
        Front-End application입니다. 또한 시각적 효과를 위하여 Framer Motion 을
        사용했으며 이 application을 제작하는데 중요한 아이디어를 제공해준 slider
        effect을 비롯하여 다양한 animation 효과 또한 구현했습니다. <br />
        <br /> 이 application을 제작하면서 특히 재미있었던 점은 마지막 페이지에
        첨부한 동물 card animation 입니다. JavaScript에 기본적인 event listener
        효과인 mouseEnter mouseLeave 를 활용한 Hovering animation 구현이 기억에
        남습니다." <br /> <br /> 구현하는데 힘들었던 부분은 랜덤으로
        제공되어지는 카드를 구현하는 것이 힘들었습니다. 그러나 이 과정을 통하여
        NextJs에서에 SSR 데이터 처리에 대하여 공부할 수 있는 기회가 되었습니다.
      </p>
    );
  };
  const Cart = () => {
    return (
      <p>
        모바일 혹은 웹 어디에서 든지 Cart App과 함께 수 많은 가구들과 홈
        데코레이션 제품들을 비교해 보시고 본인 또는 친구의 집에 가장 어울리는
        최적의 아이템을 찾아 보세요 !! <br />
        <br /> 이 application은 TailwindCss를 공부하기 위해 TypeScript와
        NextJs(React) 를 활용하여 만들어본 Front-End
        application입니다. TailwindCss를 선택한 이유는 TailwindCss만에 직관적인
        Css Tag에서 오는 장점때문도 있고, 무엇보다 반응형 앱 , 다양한 에니메이션
        제작에 기존 CSS와 비교했을때 오는 용이성 때문입니다. <br />
        <br /> 이 application을 제작하면서 단순한 작업 외엔 할수없었던 CSS
        작업이 정말 혁신적으로 재미있게 다가왔고, 새로운 눈으로 Front-End에 임할
        수 있게 되었습니다.
        <br />
        <br />
        하지만 사용한 지 얼마 안되었을 때에는 계속해서 공식문서를 참고해서
        공부해야 했고 몇몇 Tag들은 아직도 낯섭니다. 그럼에도 TailwindCss에
        익숙해졌을 때에 올 편의성을 생각 해보면, 이렇게 애를 먹어가며 공부하는
        과정이 너무나도 즐겁게 다가왔습니다.
      </p>
    );
  };
  const ToDo = () => {
    return (
      <p>
        ToDo App 과 함께 당신에 매일매일을 최적에 상태로 정리하고 효율적으로
        보내보세요! 직관적이며 필요한 것외엔 만들지 않은 단순한 우리에
        application은 당신의 생산성을 극대화 하는데 집중했습니다.
        <br />
        <br />
        이 application은 TypeScript , React를 활용하여 제작한 Front-End
        application입니다. 저는 Nomad Coder의 React 관련 강의를 수강하던 중 Drag
        And Drop효과를 위한 Beautiful DnD 라이브러리 강의 과제였던 ToDo앱에 더
        재미있는 효과들을 입히며 만들어 보았습니다.
        <br />
        <br />
        이 application 을 위해서는 React application 상태를 용이하게 관리하도록
        도와주는 Recoil의 atoms 와 selectors를 이용하는 법을 심도있게
        배웠습니다. 처음엔 파일별로 리액트를 사용해왔기에 root file에서 관리하는
        개념이 낯설었으나 여기서 오는 편리성을 생각하면 힘들더라도 익숙해 지도록
        열심히 복습해야겠다고 생각합니다.
        <br />
        <br />
        기억에 남는 어려웠던 점은 당시에는 수업에서 다루지 않았던 에니메이션을
        구현하는 것이 어려웠습니다.
      </p>
    );
  };
  const Paint = () => {
    return (
      <p>
        Paint App에서 당신의 창의력을 활용하여 무한한 가능성의 분야로 날개를
        펼쳐보세요. 세상을 놀래킬 수 있는 당신의 혁신적인 생각을 저희의
        application과 함께 제작하고 또 성장해 나갔으면 좋겠습니다.
        <br />
        <br />
        이 application은 Nomad Coder의 강의를 수강하며 기초적인 Html, CSS,
        JavaScript와 JavaScript의 canvas tag를 활용하여 제작한 Paint
        application입니다.
        <br />
        <br />
        이 application을 개발하면서 JavaScript를 활용하여 interactive한 기능
        개발을 다시 한번 느껴 볼 수 있었고, 당시 어려운 개발을 하면서
        힘들었었지만 다시 한번 개발의 재미를 느끼는데 큰 도움이 됐었습니다.
        <br />
        <br />이 application은 React event-listner 코드에 익숙해져있다 오랜만에
        JavaScript 코드를 보니 처음에는 당황했었다. 그러나 다시한번 JavaScript를
        리마인드 할 수 있는 좋은 기회가 되었습니다.
      </p>
    );
  };
  const Jobs = () => {
    return (
      <p>
        현재 구직중이신가요 이직을 고려중이신가요? 저희 Jobs앱과 함께 그 고민을
        해결하세요! 원하시는 구직 정보를 와 관련되는 키워드를 입력하시면 관련된
        수많은 채용공고를 보여드립니다!
        <br />
        <br />
        이 application은 Nomad Coder의 python 강의를 수강하며 진행한 challenge에
        졸업 과제로써 제출한 web scrapping application 입니다.
        <br />
        python을 공부하면서 주로 기초적인 문법 위주에 공부만 해왔었지만 실제로
        프로젝트를 진행하면서 프로그램을 제작하여 개발을 해본 적이 처음이었기에
        어려웠지만 막상 프로그램을 배포해보니 python을 활용하여 코드를 작성하는
        과정이 재미있게 다가왔었습니다.
        <br />
        <br />
        이 application 코드를 작성하면서 어려웠던 점은, scrapping을 시도했던
        사이트들 마다 정보를 처리하는 방법이 달라서 매번 scrapping 코드를 새로
        작성해야 했었어서 꽤나 애먹었었던 기억이 남습니다.
        <br />
        <br />
        현재는 scrapping 데이터를 얻기위해 참고했었던 페이지 정보가 변경되면서
        더 이상 scrapping이 가능하지 않습니다.
      </p>
    );
  };
  const Twitter = () => {
    return (
      <p>
        누구든지 쉽게 사용할 수 있는 Twitter App에서 함께 대화를 나눠보세요!
        어디서나 트렌드에 빠르게 반응하는 소셜 미디어인 Twitter App으로 전
        세계에서 일어나는 일들을 알아보고 소통해보세요!
        <br />
        <br />
        이 application은 Nomad Coder의 Firebase 강의를 수강하며 제작한 Clone
        Coding Project 입니다. Front-End 파트를 JavaScript , React , CSS 를
        활용하여 제작하였고 google Firebase를 활용하여 CRUD , Authentication ,
        File Upload 기능을 제작하는 방법에 대해 공부하였습니다.
        <br />
        <br />
        이 application에서 평소에 Back-End에 부담감을 느끼던 저로써는
        Firebase라는 도구는 유용하게 다가왔습니다. 제가 하나하나 코드를 작성할
        필요 없이 이 tool을 제대로 활용하기만 하여도 완성도 높은 개발을 할 수
        있는 강력한 도구라는 생각이 들었습니다. 또한 웹, 모바일 가리지 않고
        활용할 수 있다는 점도 초보 개발자인 저에게 꼭 필요한 기술이라는 생각이
        들기도 하였습니다.
        <br />
        <br />이 application을 단기간에 서둘러 만들고 배포했기 때문에 완성도가
        낮았고 Firebase를 깊게 공부해볼 시간이 없었던 점이 아쉽게 다가옵니다.
      </p>
    );
  };
  const Carrot = () => {
    return (
      <p>
        Carrot App에서 중고 개래부터 맛집을 비롯한 다양한 동네 정보까지,
        이웃들과 서로 함께하는 가깝고 따뜻한 당신의 지역 생활 커뮤니티를 지금
        바로, 당신 근처에서부터 만들어 나가 보세요!
        <br />
        <br />
        이 application은 Nomad Coder의 NextJs 강의를 수강하며 제작한 Full Stack
        NextJs Clone Coding Project 입니다. React를 기반으로 만들어진 Framework
        답게 오로직 NextJs 와 TypeScript 만으로 Front-End , Back-End 파트를
        개발하였습니다. Front-End에서 tailwindCss를 처음으로 접하였고 ,
        Back-End로 PrismaDB를 활용하는 연습을 하면서 server-less Database 에
        대하여 학습하는 기회도 되었습니다.
        <br />
        <br />
        이 application을 제작하면서 NextJs에서 server less , server side
        rendering 들을 다루는 방식에 대해 공부할 수 있었고 더 깊게 학습하고 싶은
        욕심이 생겼습니다.
        <br />
        <br />이 application을 개발하면서 Front-End 부분은 재미있었지만 낯설던
        server less Back-End와 NextJs에 심화적인 기술, vercel 을 활용한 배포는
        보다 프로그래밍 지식을 요구했기에 벽에 부딪힌 듯한 기분이 들기도
        하였습니다.
      </p>
    );
  };
  const CoinsTracker = () => {
    return (
      <p>
        CoinsTracker App에서 매일매일 변하는 코인들에 변동성을 확인해보세요!
        저희는 Bitcoin , Ethereum 을 비롯한 수 많은 코인들을 체크하고 있습니다.
        저희에 깔끔하게 정리된 앱을 지금 바로 사용해보세요.
        <br />
        <br />
        이 application은 Nomad Coder의 React 강의를 수강 후 Challenge를 하며
        제작한 Project입니다. React , TypeScript 와 css 를 통해 제작한 Front-End
        application입니다.
        <br />
        <br />
        이 application은 React Query 를 이용하여 Crypto Price API 의 데이터를
        Fetching하는 연습과 recoil , atom을 활용한 다크모드 구현 법, Apex Charts
        를 활용하여 암호화폐 시세 변화 데이터를 시각화를 위한 다양한 그래픽
        구현등에 대한 코드를 제작하였습니다
        <br />
        <br />
        기억에 남는 점은 처음 다크모드를 구현할 때 Recoil , Atom을 사용하지 않고
        제작하였었는데 오류 투성이었기에 정말 힘들게 제작했던 기억이 나는데
        atom을 활용하여 간편하게 제작할 수 있던 점이 충격으로 다가왔던 기억이
        남습니다.
      </p>
    );
  };
  return (
    <div className="h-[11.5rem] ">
      <div>
        {(currentLoca[3] === "Netflix" && netflix()) ||
          (currentLoca[3] === "YouTube" && YouTube()) ||
          (currentLoca[3] === "Cart" && Cart()) ||
          (currentLoca[3] === "ToDo" && ToDo()) ||
          (currentLoca[3] === "Paint" && Paint()) ||
          (currentLoca[3] === "Jobs" && Jobs()) ||
          (currentLoca[3] === "Twitter" && Twitter()) ||
          (currentLoca[3] === "Carrot" && Carrot()) ||
          (currentLoca[3] === "CoinsTracker" && CoinsTracker()) ||
          (currentLoca[3] === "KoreanLanguage" && KoreanLanguage())}
      </div>
    </div>
  );
}

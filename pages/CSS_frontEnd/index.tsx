import { NextPage } from "next";
import Link from "next/link";

const CSS_frontEnd: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/CSS_frontEnd/Best_Horror_Scene">Best Horror Scene</Link>
          <div> origianl page : https://besthorrorscenes.com/</div>
          <Link href="/CSS_frontEnd/Paint Box">Paint Box</Link>
          <div> origianl page : https://paint-box.com/</div>
          <Link href="/CSS_frontEnd/10x19">10x19</Link>
          <div> origianl page : http://10x19.co/</div>
        </li>
        <div className="flex items-center justify-center pt-10 ">
          <div
            className="flex h-80
          w-80 items-center justify-start space-x-10 bg-teal-300 text-center sm:h-96 sm:w-96
          sm:bg-amber-300 md:h-[28rem] md:w-[28rem] md:bg-indigo-300 lg:h-[32rem] lg:w-[32rem]
          lg:bg-orange-300 xl:h-[36rem] xl:w-[36rem] xl:bg-lime-300 2xl:bg-red-300
          "
          >
            <span className="place-self-center">
              Responsive Practice
              <br />
              margin과 padding 속성은 각각 바깥쪽 여백, 안쪽 여백을 의미합니다.
              width, height 속성과 마찬가지로 숫자 뒤에 단위를 표시하여
              적습니다. margin과 padding는 border 을 경계로 나뉩니다. An ever
              growing collection featuring some of the best scenes in horror.
              “Best Horror Scenes” is a collection of scenes I feel are some of
              the most affecting in horror. Some may be simple black cat scares,
              others may be more subdued or nuanced. Many come from films that
              aren&apos;t necessarily “horror” but have elements or threads of
              horror.
            </span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CSS_frontEnd;

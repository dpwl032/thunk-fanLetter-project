import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

function MusicVideo() {
  return (
    <>
      <YotubVideo>
        <YouTube
          videoId="xjBY3MLdvVQ" //동영상 주소
          opts={{
            width: "100%",
            height: "500px",
            playerVars: {
              autoplay: 1, //자동 재생 여부
              modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "xjBY3MLdvVQ", //반복 재생으로 재생할 플레이 리스트
              disablekb: 0,
            },
          }}
          onReady={(e) => {
            e.target.mute(); //소리 끔
          }}
        />
      </YotubVideo>
    </>
  );
}

export default MusicVideo;

const YotubVideo = styled.div`
  width: 100%;
  height: 410px;
  background-color: black;
`;

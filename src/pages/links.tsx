import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import arrayShuffle from "array-shuffle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <Layout>
      <Friends />
      <p style={{ paddingLeft: '20px' }}>The list is random. try to refresh the page.</p>
    </Layout>
  );
}

interface FriendData {
  pic: string;
  gitName: string;
  name: string;
  intro: string;
  url: string;
  note: string;
}

function githubPic(name: string) {
  return `https://github.yuuza.net/${name}.png`;
}

var friendsData: FriendData[] = [
  {
    pic: githubPic("lideming"),
    gitName: "lideming",
    name: "lideming",
    intro: "Building random things with Deno, Node and .NET Core.",
    url: "https://yuuza.net/",
    note: "工具箱的工具，能够解决99.999%的系统问题，似乎他帮我装好了ArchLinux，解决了无数的bug。",
  },
  {
    pic: githubPic("Therainisme"),
    name: "Therainisme",
    gitName: "Therainisme",
    intro: "寄忆犹新",
    url: "https://notebook.therainisme.com/",
    note: "雨神，一出门就下雨。我大学期间的同事，任我社2019级多媒体部部长。前端小能手，我们经常一起捣鼓奇怪的小工具。",
  },
  {
    pic: githubPic("AndSonder"),
    name: "Sonder",
    gitName: "AndSonder",
    intro: "life is but a span, I use python",
    url: "https://blog.keter.top/",
    note: "科协F4的成员。我大学期间的同事，任我社2019级软件部部长。主攻方向是神经网络攻击。",
  },
  {
    pic: githubPic("Zerorains"),
    name: "Zerorains",
    gitName: "Zerorains",
    intro: "life is but a span, I use python",
    url: "https://blog.zerorains.top",
    note: "科协F4的成员。主攻方向是基于深度学习技术图像分割。",
  },
  {
    pic: githubPic("breezeshane"),
    name: "Breeze Shane",
    gitName: "breezeshane",
    intro: "一个专注理论但学不懂学不会的锈钢废物，但是他很擅长产出Bug，可能是因为他体表有源石结晶分布，但也可能仅仅是因为他是Bug本体。",
    url: "https://breezeshane.github.io/",
    note: "试图爆肝原理，理解GAN的传奇。",
  },
  {
    pic: githubPic("VisualDust"),
    name: "VisualDust",
    gitName: "VisualDust",
    intro: "Rubbish CVer | Poor LaTex speaker | Half stack developer | 键圈躺尸砖家",
    url: "https://focus.visualdust.space/",
    note: "家喻户晓的工具箱，好像能解决99.9%的问题。我们喜欢找他和他的工具解决问题。",
  },
  {
    pic: githubPic("Fly-Pluche"),
    name: "Fly-Pluche",
    gitName: "Fly-Pluche",
    intro: "The man is too lazy to introduce himself",
    url: "https://fly-pluche.github.io/",
    note: "善良活泼的小伙子，喜欢问问题，喜欢思考问题，对事情很积极上心。",
  }

];

function Friends() {
  const [friends, setFriends] = useState<FriendData[]>(friendsData);
  useEffect(() => {
    setFriends(arrayShuffle(friends))
  }, []);
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  useEffect(() => {
    // After `current` change, set a 300ms timer making `previous = current` so the previous card will be removed.
    const timer = setTimeout(() => {
      setPrevious(current);
    }, 300);

    return () => {
      // Before `current` change to another value, remove (possibly not triggered) timer, and make `previous = current`.
      clearTimeout(timer);
      setPrevious(current);
    };
  }, [current]);
  return (
    <div className="friends" lang="zh-cn">
      <div style={{ position: "relative" }}>
        <div className="friend-columns">
          {/* Big card showing current selected */}
          <div className="friend-card-outer">
            {[
              previous != current && (
                <FriendCard key={previous} data={friends[previous]} fadeout />
              ),
              <FriendCard key={current} data={friends[current]} />,
            ]}
          </div>

          <div className="friend-list">
            {friends.map((x, i) => (
              <div
                key={x.name}
                className={clsx("friend-item", {
                  current: i == current,
                })}
                onClick={() => setCurrent(i)}
              >
                <img src={x.pic} alt="user profile photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FriendCard(props: { data: FriendData; fadeout?: boolean }) {
  const { data, fadeout = false } = props;
  return (
    <div className={clsx("friend-card", { fadeout })}>
      <div className="card">
        <div className="card__image">
          <img
            src={data.pic}
            alt="User profile photo"
            title="User profile photo"
          />
        </div>
        <div className="card__body">
          <h2>
            {data.name}
            <a href={"https://github.com/" + data.gitName}>
            <FontAwesomeIcon className="user-profile-icon" icon={faGithubAlt} />
            </a>

          </h2>
          
          <p>
            <big>{data.intro}</big>
          </p>
          <p>
            <small>Comment : {data.note}</small>
          </p>
        </div>
        <div className="card__footer">
          <a href={data.url} className="button button--primary button--block">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

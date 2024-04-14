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
    intro: "Building random things with Deno, Node and .NET Core | btw I use Arch Linux",
    url: "https://yuuza.net/",
    note: "工具箱的工具，能够解决99.999%的系统问题，似乎他帮我装好了ArchLinux，解决了无数的bug。现就职于腾讯WXG，前端大师",
  },
  {
    pic: githubPic("Therainisme"),
    name: "Therainisme",
    gitName: "Therainisme",
    intro: "寄忆犹新",
    url: "https://notebook.therainisme.com/",
    note: "550W成员之一，目前就读于ECNU, Master，研究方向是区块链及隐私计算，经常有奇妙的解决方案。",
  },
  {
    pic: githubPic("AndSonder"),
    name: "Sonder",
    gitName: "AndSonder",
    intro: "無限進步 !",
    url: "https://space.keter.top/",
    note: "科协F4的成员。曾主攻神经网络对抗攻击方向，现UESTC研究生，研究方向是HPC实现及优化。",
  },
  {
    pic: githubPic("Zerorains"),
    name: "Zerorains",
    gitName: "Zerorains",
    intro: "I want to be strong. But it seems so hard.",
    url: "https://blog.zerorains.top",
    note: "科协F4的成员。曾主攻方向是基于深度学习技术图像分割，现ECNU研究生，研究方向是分布式计算系统。",
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
    intro: "Deep learning | half stack, ordinary magician",
    url: "https://www.gong.host/",
    note: "550W成员之一，目前就读于NCSU, PhD Candidate, 研究方向是大语言模型的隐私计算，LLM砖家，每周都会和他聊LLM。",
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

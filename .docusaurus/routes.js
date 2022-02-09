
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/docs/tags/algorithm',
    component: ComponentCreator('/docs/tags/algorithm','48d'),
    exact: true
  },
  {
    path: '/docs/tags/backend',
    component: ComponentCreator('/docs/tags/backend','908'),
    exact: true
  },
  {
    path: '/docs/tags/basic-algorithm',
    component: ComponentCreator('/docs/tags/basic-algorithm','b6f'),
    exact: true
  },
  {
    path: '/docs/tags/big-data',
    component: ComponentCreator('/docs/tags/big-data','f24'),
    exact: true
  },
  {
    path: '/docs/tags/computer-network',
    component: ComponentCreator('/docs/tags/computer-network','58a'),
    exact: true
  },
  {
    path: '/docs/tags/data-base',
    component: ComponentCreator('/docs/tags/data-base','497'),
    exact: true
  },
  {
    path: '/docs/tags/deconvolution',
    component: ComponentCreator('/docs/tags/deconvolution','67d'),
    exact: true
  },
  {
    path: '/docs/tags/deep-learning',
    component: ComponentCreator('/docs/tags/deep-learning','991'),
    exact: true
  },
  {
    path: '/docs/tags/framework',
    component: ComponentCreator('/docs/tags/framework','190'),
    exact: true
  },
  {
    path: '/docs/tags/hadoop',
    component: ComponentCreator('/docs/tags/hadoop','706'),
    exact: true
  },
  {
    path: '/docs/tags/hdfs',
    component: ComponentCreator('/docs/tags/hdfs','3f2'),
    exact: true
  },
  {
    path: '/docs/tags/java',
    component: ComponentCreator('/docs/tags/java','bac'),
    exact: true
  },
  {
    path: '/docs/tags/math',
    component: ComponentCreator('/docs/tags/math','49d'),
    exact: true
  },
  {
    path: '/docs/tags/oop',
    component: ComponentCreator('/docs/tags/oop','ebc'),
    exact: true
  },
  {
    path: '/docs/tags/operating-system',
    component: ComponentCreator('/docs/tags/operating-system','243'),
    exact: true
  },
  {
    path: '/docs/tags/paper',
    component: ComponentCreator('/docs/tags/paper','f39'),
    exact: true
  },
  {
    path: '/docs/tags/science',
    component: ComponentCreator('/docs/tags/science','217'),
    exact: true
  },
  {
    path: '/docs/tags/sql',
    component: ComponentCreator('/docs/tags/sql','1aa'),
    exact: true
  },
  {
    path: '/docs/tags/yolov-5',
    component: ComponentCreator('/docs/tags/yolov-5','d4d'),
    exact: true
  },
  {
    path: '/docs/tags/改进',
    component: ComponentCreator('/docs/tags/改进','8ca'),
    exact: true
  },
  {
    path: '/docs/tags/神经网络',
    component: ComponentCreator('/docs/tags/神经网络','79d'),
    exact: true
  },
  {
    path: '/docs/tags/算法',
    component: ComponentCreator('/docs/tags/算法','990'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','47a'),
    routes: [
      {
        path: '/docs/Algorithm/Acwing算法基础课/BasicAlgorithm',
        component: ComponentCreator('/docs/Algorithm/Acwing算法基础课/BasicAlgorithm','396'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Algorithm/Acwing算法基础课/DataStructure',
        component: ComponentCreator('/docs/Algorithm/Acwing算法基础课/DataStructure','33d'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Algorithm/Acwing算法基础课/ddd',
        component: ComponentCreator('/docs/Algorithm/Acwing算法基础课/ddd','ad8'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Algorithm/Acwing算法基础课/Search&Graph',
        component: ComponentCreator('/docs/Algorithm/Acwing算法基础课/Search&Graph','7ef'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Algorithm/Acwing算法基础课/闫式dp分析',
        component: ComponentCreator('/docs/Algorithm/Acwing算法基础课/闫式dp分析','054'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Algorithm/蓝桥杯历年真题/第十二届蓝桥杯省赛第二场_2021_5_9/第十二届蓝桥杯省赛第二场(2021.5.9)',
        component: ComponentCreator('/docs/Algorithm/蓝桥杯历年真题/第十二届蓝桥杯省赛第二场_2021_5_9/第十二届蓝桥杯省赛第二场(2021.5.9)','81d'),
        exact: true,
        'sidebar': "Algorithm"
      },
      {
        path: '/docs/Courses/大数据分析和原理/Hadoop技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/Hadoop技术原理','f79'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/HBase技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/HBase技术原理','657'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/HDFS技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/HDFS技术原理','7df'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/MapReduce技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/MapReduce技术原理','a37'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/NoSQL概念',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/NoSQL概念','ea2'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/Spark技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/Spark技术原理','eba'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/Storm技术原理',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/Storm技术原理','b1b'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/大数据分析和原理/大数据概述',
        component: ComponentCreator('/docs/Courses/大数据分析和原理/大数据概述','b23'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/IO设备管理',
        component: ComponentCreator('/docs/Courses/操作系统/IO设备管理','a0b'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/内存管理',
        component: ComponentCreator('/docs/Courses/操作系统/内存管理','209'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/并行程序设计',
        component: ComponentCreator('/docs/Courses/操作系统/并行程序设计','6e7'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/操作系统基础概念',
        component: ComponentCreator('/docs/Courses/操作系统/操作系统基础概念','285'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/文件系统',
        component: ComponentCreator('/docs/Courses/操作系统/文件系统','b88'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/操作系统/进程与线程',
        component: ComponentCreator('/docs/Courses/操作系统/进程与线程','d8c'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数学建模/图优化',
        component: ComponentCreator('/docs/Courses/数学建模/图优化','992'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数学建模/微分与差分',
        component: ComponentCreator('/docs/Courses/数学建模/微分与差分','065'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数学建模/插值与拟合',
        component: ComponentCreator('/docs/Courses/数学建模/插值与拟合','d55'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数学建模/线性规划',
        component: ComponentCreator('/docs/Courses/数学建模/线性规划','159'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数学建模/非线性规划',
        component: ComponentCreator('/docs/Courses/数学建模/非线性规划','c02'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/关系代数与SQL',
        component: ComponentCreator('/docs/Courses/数据库原理/关系代数与SQL','c43'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/基本概念',
        component: ComponentCreator('/docs/Courses/数据库原理/基本概念','b85'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/数据库安全',
        component: ComponentCreator('/docs/Courses/数据库原理/数据库安全','a28'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/数据库并发',
        component: ComponentCreator('/docs/Courses/数据库原理/数据库并发','262'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/数据库恢复',
        component: ComponentCreator('/docs/Courses/数据库原理/数据库恢复','c62'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/数据库规范性理论',
        component: ComponentCreator('/docs/Courses/数据库原理/数据库规范性理论','f59'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/数据库原理/数据库设计',
        component: ComponentCreator('/docs/Courses/数据库原理/数据库设计','860'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/算法设计与分析/分治算法',
        component: ComponentCreator('/docs/Courses/算法设计与分析/分治算法','f71'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/算法设计与分析/动态规划',
        component: ComponentCreator('/docs/Courses/算法设计与分析/动态规划','0b0'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/算法设计与分析/回溯算法',
        component: ComponentCreator('/docs/Courses/算法设计与分析/回溯算法','aea'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/算法设计与分析/基本概念',
        component: ComponentCreator('/docs/Courses/算法设计与分析/基本概念','540'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/算法设计与分析/贪心算法',
        component: ComponentCreator('/docs/Courses/算法设计与分析/贪心算法','fea'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/计算机网络/杂记',
        component: ComponentCreator('/docs/Courses/计算机网络/杂记','8fe'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/面向对象程序设计/Java-Gui编程',
        component: ComponentCreator('/docs/Courses/面向对象程序设计/Java-Gui编程','11e'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/面向对象程序设计/基础概念',
        component: ComponentCreator('/docs/Courses/面向对象程序设计/基础概念','9b9'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/面向对象程序设计/多线程与网络',
        component: ComponentCreator('/docs/Courses/面向对象程序设计/多线程与网络','f69'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/面向对象程序设计/实用类大全',
        component: ComponentCreator('/docs/Courses/面向对象程序设计/实用类大全','873'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/Courses/面向对象程序设计/类-继承-多态',
        component: ComponentCreator('/docs/Courses/面向对象程序设计/类-继承-多态','d53'),
        exact: true,
        'sidebar': "Courses"
      },
      {
        path: '/docs/DeepLearning/深度学习导论/神经网络算法解析',
        component: ComponentCreator('/docs/DeepLearning/深度学习导论/神经网络算法解析','7dc'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/深度学习框架/mmdetection/How to builld a model with configs by yourself',
        component: ComponentCreator('/docs/DeepLearning/深度学习框架/mmdetection/How to builld a model with configs by yourself','4ff'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/深度学习框架/mmdetection/Installation Tutorial',
        component: ComponentCreator('/docs/DeepLearning/深度学习框架/mmdetection/Installation Tutorial','ece'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/深度学习框架/mmdetection/Instruction',
        component: ComponentCreator('/docs/DeepLearning/深度学习框架/mmdetection/Instruction','518'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/目标检测/yaml改进',
        component: ComponentCreator('/docs/DeepLearning/目标检测/yaml改进','d56'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/目标检测/yolov5介绍',
        component: ComponentCreator('/docs/DeepLearning/目标检测/yolov5介绍','e23'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/神经网络杂项/反卷积与棋盘效应',
        component: ComponentCreator('/docs/DeepLearning/神经网络杂项/反卷积与棋盘效应','614'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/DeepLearning/科研方法/如何读论文',
        component: ComponentCreator('/docs/DeepLearning/科研方法/如何读论文','de2'),
        exact: true,
        'sidebar': "DeepLearning"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

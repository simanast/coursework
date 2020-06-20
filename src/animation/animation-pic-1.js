const animationPic1 = [
  // [

  //   // {
  //   //   targets: '#pic1, #L',
  //   //   opacity: '1',
  //   // },
  // ],
  [
    // {
    //   targets: '#finat, #T, #V',
    //   opacity: '0',
    //   duration: 0,
    // },
    // {
    //   targets: '#L',
    //   opacity: '0',
    //   duration: 0,
    // },
    {
      targets: '#alphatask1, #betatask1, #gammatask1',
      opacity: '1',
    },
  ],
  [
    {
      targets: '#aAtask1',
      opacity: '0',
      duration: '0',
    },
    {
      targets: '#dBA1task1, #aBAA1task1',
      strokeWidth: '4',
      stroke: '#ff0000',
      opacity: '1',
    },
    {
      targets: '#dBA1task1, #aBAA1task1',
      strokeWidth: '1',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#dA1Ctask1, #aA1ACtask1',
      strokeWidth: '4',
      stroke: '#ff0000',
      opacity: '1',
    },
    {
      targets: '#dA1Ctask1, #aA1ACtask1',
      strokeWidth: '1',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#aBtask1',
      opacity: '0',
      easing: 'linear',
      duration: 0,
    },
    {
      targets: '#ABB1task1, #dAB1task1',
      strokeWidth: '4',
      stroke: '#0000ff',
      opacity: '1',
    },
    {
      targets: '#ABB1task1, #dAB1task1',
      strokeWidth: '1',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#B1BCtask1, #dCB1task1',
      strokeWidth: '4',
      stroke: '#0000ff',
      opacity: '1',
    },
    {
      targets: '#B1BCtask1, #dCB1task1',
      strokeWidth: '4',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#aCtask1',
      opacity: '0',
      duration: 0,
    },
    {
      targets: '#C1CBtask1, #dC1Btask1',
      strokeWidth: '4',
      stroke: '#ff00ff',
      opacity: '1',
    },
    {
      targets: '#C1CBtask1, #dC1Btask1',
      strokeWidth: '1',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#ACC1task1, #dC1Atask1',
      strokeWidth: '4',
      stroke: '#ff00ff',
      opacity: '1',
    },
    {
      targets: '#ACC1task1, #dC1Atask1',
      strokeWidth: '1',
      stroke: '#000000',
      opacity: '0',
      delay: 2000,
    },
    {
      targets: '#aAtask1, #aBtask1, #aCtask1',
      opacity: '1',
    },
  ],

  [
    {
      targets: '#gammatask1, #betatask1, #alphatask1',
      opacity: '0',
    },

    // disp
    {
      targets: '#Vtask1',
      opacity: '1',
    },
    {
      targets: '#A1B1task1, #CC1task1',
      strokeWidth: '3',
    },
    // {
    //   targets: '#CC1task1',
    //   opacity: '1',
    //   stroke: '#0000ff',
    // },
  ],
  [
    //c
    {
      targets: '#CC1task1, #A1B1task1',
      opacity: '1',
      strokeWidth: '1',
      duration: 0,
    },
    //disp
    // {
    //   targets: '#VB1C1task1, #A1B1task1C', // сам себе равен
    //   opacity: '1',
    //   duration: 0,
    // },
    {
      targets: '#dC1Btask1, #dBA1task1, #VB1C1task1',
      opacity: '1',
      stroke: '#ff0000',
      strokeWidth: '3',
    },
    {
      targets: '#dC1Btask1, #dBA1task1, #VB1C1task1',
      opacity: '0',
      stroke: '#000000',
      strokeWidth: '1',
      delay: 2200,
    },
    // {
    //   targets: '#VC1B1task1, #CC1B1',
    //   opacity: '1',
    //   stroke: '#ff0000',
    // },
    {
      targets: '#dCB1task1, #VC1B1task1',
      opacity: '1',
      stroke: '#ff0000',
      strokeWidth: '3',
    },
    {
      targets: '#dCB1task1, #VC1B1task1',
      opacity: '0',
      stroke: '#000000',
      strokeWidth: '1',
      delay: 2200,
    },
    // // результат
    // {
    //   targets: '#C1B1, #C1A1, #A1B1task1',
    //   // stroke: '#ff0000',
    //   strokeWidth: '3',
    //   // duration: 0,
    // },
    {
      targets: '#C1Vtask1, #C1V90task1',
      opacity: '1',
      stroke: '#ff0000',
    },
    {
      targets: '#tTtask1, #bTtask1',
      fill: '#0000ff',
    },
    {
      targets: '#Ttask1',
      opacity: '1',
    },
  ],
  [
    //c
    {
      targets: '#C1Vtask1, #C1V90task1',
      opacity: '0',
      stroke: '#000000',
    },
    {
      targets: '#Ttask1',
      opacity: '0',
    },
    {
      targets: '#Vtask1',
      opacity: '0',
    },
    {
      targets: '#tTtask1, #bTtask1',
      fill: '#000000',
    },
    //disp
    {
      targets: '#aBB1A1task1, #CB1A1task1, #Ltask1, #CB1task1',
      opacity: '1',
    },
    {
      targets: '#LB1task1',
      opacity: '1',
      stroke: '#ff0000',
    },
  ],
  [
    {
      targets: '#aBB1A1task1, #CB1A1task1, #CB1task1',
      opacity: '0',
    },
    {
      targets: '#LB1task1',
      opacity: '0',
      stroke: '#000000',
    },
    {
      targets: '#tVtask1, #bVtask1',
      fill: '#0000ff',
    },
    {
      targets: '#Vtask1',
      opacity: '1',
    },
    {
      targets: '#LCtask1',
      stroke: '#ff0000',
      strokeWidth: '3',
      opacity: '1',
    },
  ],
  [
    {
      targets: '#tVtask1, #bVtask1',
      fill: '#000000',
    },
    {
      targets: '#LCtask1',
      stroke: '#000000',
      strokeWidth: '1',
      opacity: '0',
    },
    {
      targets: '#Ttask1',
      opacity: '1',
    },
    {
      targets: '#finattask1',
      opacity: '1',
    },
  ],
  [
    {
      targets: '#finattask1, #Ttask1, #Vtask1',
      opacity: '0',
      duration: 0,
    },
  ],
];

export default animationPic1;

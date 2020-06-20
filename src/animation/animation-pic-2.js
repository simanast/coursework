const animationPic2 = [
  // [

  //   {
  //     targets: '#pic2',
  //     opacity: '1',
  //   },
  // ],
  [
    {
      targets:
        '#finattask2, #A1task2, #B1task2, #C1task2, #D1task2, #Ktask2, #Htask2, #A1C1task2, #B1D1task2, #A1Ktask2,  #Ntask2, #A1B1C1D1task2',
      opacity: '0',
    },
    {
      targets: '#A1task2, #B1task2, #C1task2, #D1task2',
      opacity: '1',
    },
  ],
  [
    {
      targets: '#A1B1C1D1task2',
      opacity: '1',
    },
    {
      targets: '#A1C1task2',
      opacity: '1',
    },
    {
      targets: '#B1D1task2',
      opacity: '1',
    },
    {
      targets: '#Ntask2',
      opacity: '1',
    },
  ],
  [
    { targets: '#Htask2, #Ktask2', opacity: '1', duration: 0 },
    {
      targets: '#A1Htask2',
      opacity: '1',
      stroke: '#ff0000',
      delay: 1000,
    },
    {
      targets: '#HKtask2',
      opacity: '1',
      stroke: '#0000ff',
      delay: 1000,
    },
    {
      targets: '#A1Htask2, #HKtask2',
      opacity: '0',
      stroke: '#000000',
      delay: 1000,
    },
    {
      targets: '#A1Ktask2',
      opacity: '1',
      stroke: '#ff00ff',
      strokeWidth: '3',
      // delay: 1000,
    },
  ],
  [
    {
      targets: '#A1Ktask2',
      stroke: '#000000',
      strokeWidth: '1',
    },
    {
      targets: '#K90task2',
      opacity: '1',
    },
    {
      targets: '#tKtask2, #bKtask2',
      fill: '#ff0000',
    },
    {
      targets: '#A1C1task2',
      stroke: '#0000ff',
      strokeWidth: '3',
    },
  ],
  [
    {
      targets: '#tKtask2, #bKtask2',
      fill: '#000000',
    },
    {
      targets: '#K90task2',
      opacity: '0',
    },
    {
      targets: '#A1C1task2',
      stroke: '#000000',
      strokeWidth: '1',
    },
    {
      targets: '#tHtask2, #bHtask2',
      fill: '#0000ff',
    },
    {
      targets: '#ADtask2',
      opacity: '1',
      stroke: '#ff0000',
      strokeWidth: '3',
      delay: 500,
    },
    {
      targets: '#ADtask2',
      opacity: '0',
      stroke: '#000000',
      strokeWidth: '1',
      delay: 1000,
    },
    {
      targets: '#ABtask2',
      opacity: '1',
      stroke: '#ff0000',
      strokeWidth: '3',
    },
    {
      targets: '#ABtask2',
      opacity: '0',
      stroke: '#000000',
      strokeWidth: '1',
      delay: 1000,
    },
    {
      targets: '#BCtask2',
      opacity: '1',
      stroke: '#ff0000',
      strokeWidth: '3',
    },
    {
      targets: '#BCtask2',
      opacity: '0',
      stroke: '#000000',
      strokeWidth: '1',
      delay: 1000,
    },
  ],
  [
    {
      targets: '#tHtask2, #bHtask2',
      fill: '#000000',
    },
    {
      targets: '#finattask2',
      opacity: '1',
    },
  ],
  [
    {
      targets:
        '#finattask2, #A1task2, #B1task2, #C1task2, #D1task2, #Ktask2, #Htask2, #A1C1task2, #B1D1task2, #A1Ktask2,  #Ntask2, #A1B1C1D1task2',
      opacity: '0',
    },
  ],
];

export default animationPic2;

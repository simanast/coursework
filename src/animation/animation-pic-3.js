const animationPic3 = [
  [
    {
      targets: '#Htask3',
      opacity: '1',
    },
    {
      targets: '#E1task3',
      opacity: '1',
      delay: 200,
    },
  ],
  // [
  //   {
  //     targets: '#E1H2task3',
  //     opacity: '1',
  //   },
  //   {
  //     targets: '#E1task3',
  //     opacity: '1',
  //     delay: 200,
  //   },
  // ],
  [
    {
      targets: '#BH2task3, #CH3task3, #H290task3, #H390task3, #Htask3,  #H190task3, #AH1task3',
      opacity: '0',
    },
    {
      targets: '#AH390task3',
      opacity: '0',
    },
    {
      targets: '#AOtask3',
      opacity: '0',
    },
    {
      targets: '#E1H3task3',
      opacity: '1',
    },
    {
      targets: '#E1H2task3',
      opacity: '1',
    },
    {
      targets: '#O9task3, #OO9task3',
      opacity: '1',
    },
    {
      targets: '#E1O9task3',
      opacity: '1',
    },
    {
      targets: '#H2H3',
      opacity: '1',
    },
  ],
  [
    { targets: '#E1H3task3, #E1H2task3', opacity: '0' },
    { targets: '#OO9task3', opacity: '0' },
    { targets: '#AOtask3, #E1O9task3', opacity: '1', strokeWidth: '3' },
    { targets: '#E1O9task3', strokeWidth: '1', delay: 1000 },
    { targets: '#E1O9task3, #E1task3, #O9task3', opacity: '0' },
    { targets: '#H2H3task3, #AOtask3', strokeWidth: '1' },
    { targets: '#AH390task3', strokeWidth: '1', opacity: '1' },
  ],
  [
    {
      targets: '#CH3task3, #BH2task3, #H390task3, #H290task3, #AH1task3, #H190task3',
      opacity: '1',
    },
  ],
];

export default animationPic3;

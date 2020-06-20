const animationPic4 = [
  [{ targets: '#tr1, #tr2', opacity: '1' }],
  [
    {
      targets: '#hAtr1, #hBtr1, #hCtr1, #C1tr1',
      opacity: '1',
    },
    {
      targets: '#C1tr2',
      opacity: '0',
    },
    {
      targets: '#BHtr2, #AHtr2, #hCtr2, #tCtr2, #bCtr2, #hHtr2',
      opacity: '1',
    },
    {
      targets: '#Htr2, #Htr1',
      opacity: '1',
    },
    {
      targets: '#Otr1, #Otr2',
      opacity: '1',
    },
  ],
  [
    //   {
    //     targets: '#Otr1, #Otr2',
    //     opacity: '1',
    //   },
    {
      targets: '#HOtr1, #HOtr2',
      opacity: '1',
    },
  ],
  [
    {
      targets:
        '#Otr1, #Otr2, #HOtr1, #HOtr2, #Htr2, #Htr1, #BHtr2, #AHtr2, #hCtr2, #tCtr2, #bCtr2, #hHtr2, #hAtr1, #hBtr1, #hCtr1, #C1tr1',
      opacity: '0',
    },
  ],
];

export default animationPic4;
